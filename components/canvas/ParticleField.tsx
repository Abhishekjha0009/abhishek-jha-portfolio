'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uScrollVelocity;
  varying vec3 vPosition;
  varying float vDistance;

  void main() {
    vPosition = position;
    vec3 pos = position;

    // Undulating 3D wave math
    float waveX = sin(pos.x * 0.35 + uTime * 0.7);
    float waveY = cos(pos.y * 0.35 + uTime * 0.7);
    pos.z += (waveX + waveY) * 0.45;

    // Mouse interaction displacement
    float mouseDist = distance(pos.xy, uMouse * 8.0);
    float mouseHover = smoothstep(3.0, 0.0, mouseDist);
    pos.z += mouseHover * 1.2;

    // Scroll velocity pulse effect
    pos.z += sin(pos.x * 2.0 + uTime * 3.0) * (uScrollVelocity * 0.15);

    vDistance = mouseHover;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Dynamic point sizing based on camera distance and mouse hover
    gl_PointSize = (4.5 + mouseHover * 4.0) * (25.0 / -mvPosition.z);
  }
`;

const fragmentShader = `
  varying vec3 vPosition;
  varying float vDistance;
  uniform float uTime;

  void main() {
    // Make particles circular
    vec2 center = gl_PointCoord - vec2(0.5);
    float dist = length(center);
    if (dist > 0.5) discard;

    float alpha = smoothstep(0.5, 0.0, dist);

    // Dynamic cyber gradient: Cyan (#00F0FF) to Indigo (#7000FF) with Emerald highlights
    vec3 colorCyan = vec3(0.0, 0.94, 1.0);
    vec3 colorIndigo = vec3(0.44, 0.0, 1.0);
    vec3 colorEmerald = vec3(0.0, 1.0, 0.61);

    float mixRatio = sin(vPosition.x * 0.2 + vPosition.y * 0.2 + uTime * 0.5) * 0.5 + 0.5;
    vec3 finalColor = mix(colorCyan, colorIndigo, mixRatio);

    // Boost brightness on cursor interaction
    finalColor = mix(finalColor, colorEmerald, vDistance * 0.8);

    gl_FragColor = vec4(finalColor, alpha * (0.45 + vDistance * 0.5));
  }
`;

interface ParticleFieldProps {
  particleCount?: number;
  scrollVelocity?: number;
}

export function ParticleField({ particleCount = 3500, scrollVelocity = 0 }: ParticleFieldProps) {
  const meshRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  const { viewport } = useThree();

  // Generate 3D particle positions with random spread
  const [positions, count] = useMemo(() => {
    const finalCount = particleCount;
    const pos = new Float32Array(finalCount * 3);

    for (let i = 0; i < finalCount; i++) {
      const x = (Math.random() - 0.5) * 22;
      const y = (Math.random() - 0.5) * 22;
      const z = (Math.random() - 0.5) * 8;

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }

    return [pos, finalCount];
  }, [particleCount]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uScrollVelocity: { value: 0 },
    }),
    []
  );

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates to [-1, 1]
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (!materialRef.current) return;

    // Smooth lerp for mouse coordinates to prevent sudden jumps
    mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.06;
    mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.06;

    materialRef.current.uniforms.uTime.value += delta * 0.8;
    materialRef.current.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
    materialRef.current.uniforms.uScrollVelocity.value = scrollVelocity;

    if (meshRef.current) {
      // Subtle continuous slow rotation for organic feel
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.02) * 0.05;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
