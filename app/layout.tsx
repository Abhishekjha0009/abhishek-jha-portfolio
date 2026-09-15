import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Abhishek Kumar | Full Stack Developer & MERN Architect',
  description:
    'Personal developer portfolio of Abhishek Kumar. Building production-style full-stack web applications, interactive WebGL GPU particle systems, and high-performance MERN micro-architectures.',
  keywords: [
    'Abhishek Kumar',
    'Full Stack Developer',
    'MERN Architect',
    'Next.js 15',
    'React Three Fiber',
    'WebGL Shaders',
    'GSAP Animations',
    'Sanity CMS',
    'Software Engineer India',
  ],
  authors: [{ name: 'Abhishek Kumar' }],
  creator: 'Abhishek Kumar',
  openGraph: {
    title: 'Abhishek Kumar | Full Stack Developer & MERN Architect',
    description:
      'Production MERN applications, WebGL GPU particle systems, and 370+ LeetCode problem solving journey.',
    url: 'https://abhishekkumar.dev',
    siteName: 'Abhishek Kumar Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhishek Kumar | Full Stack Developer & MERN Architect',
    description:
      'Production MERN applications, WebGL GPU particle systems, and 370+ LeetCode problem solving journey.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abhishek Kumar',
    jobTitle: 'Full Stack Developer',
    url: 'https://abhishekkumar.dev',
    sameAs: [
      'https://github.com/Abhishekjha0009',
      'https://www.linkedin.com/in/abhishek-jha-756641325/',
      'https://leetcode.com/u/abhishek_dsa/',
    ],
    knowsAbout: [
      'Full Stack Development',
      'MERN Stack',
      'Next.js',
      'React Three Fiber',
      'WebGL GLSL Shaders',
      'Data Structures & Algorithms',
    ],
    alumniOf: 'Noida Institute of Engineering and Technology',
  };

  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0a0a0f] text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950 font-sans custom-scrollbar bg-grid-pattern">
        {children}
      </body>
    </html>
  );
}
