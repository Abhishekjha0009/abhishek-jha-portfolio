export interface ProjectData {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  category: 'Full Stack' | 'MERN' | 'Real-Time' | 'Frontend';
  problem: string;
  architecture: string;
  solution: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  order: number;
}

export interface TechnologyData {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database & Cloud' | 'Languages & Tools';
  iconName: string;
  highlight: boolean;
}

export interface SiteContentData {
  name: string;
  role: string;
  headline: string;
  subheadline: string;
  location: string;
  education: {
    degree: string;
    institution: string;
    year: string;
    cgpa: string;
    details: string[];
  };
  internship: {
    role: string;
    company: string;
    duration: string;
    type: string;
    responsibilities: string[];
  };
  leetCodeStats: {
    username: string;
    profileUrl: string;
    solvedCount: string;
    topics: { name: string; level: string; description: string }[];
  };
  socialLinks: {
    github: string;
    linkedin: string;
    leetcode: string;
    email: string;
  };
  aboutBio: string[];
  interests: string[];
}

export const FALLBACK_SITE_CONTENT: SiteContentData = {
  name: "Abhishek Kumar",
  role: "Aspiring Software Developer / Full Stack Engineer",
  headline: "Building full-stack systems that solve real problems.",
  subheadline: "I build production-style web applications with modern frontend, backend, real-time architectures, and GPU-accelerated interfaces.",
  location: "Greater Noida, India",
  education: {
    degree: "B.Tech - Computer Science and Engineering",
    institution: "Noida Institute of Engineering and Technology (NIET)",
    year: "2024 – 2028",
    cgpa: "8.78 / 10",
    details: [
      "CBSE Class 12 - Shanti Niketan Academy (2023): 73%",
      "CBSE Class 10 - Shanti Niketan Academy (2021): 94%"
    ]
  },
  internship: {
    role: "Web Development Intern",
    company: "Prodigy InfoTech",
    duration: "1 Month",
    type: "Remote",
    responsibilities: [
      "Completed 5 hands-on web development projects using HTML5, CSS3, and JavaScript.",
      "Built Tic-Tac-Toe game implementing win-detection logic and responsive interactive UI.",
      "Developed Stopwatch application utilizing JavaScript timer functions and DOM manipulation.",
      "Strengthened core web performance, DOM event handling, and cross-device responsive layout standards."
    ]
  },
  leetCodeStats: {
    username: "abhishek_dsa",
    profileUrl: "https://leetcode.com/u/abhishek_dsa/",
    solvedCount: "370+",
    topics: [
      { name: "C++", level: "Primary Language", description: "Standard Template Library (STL), Memory allocation, Pointer arithmetic, Object-Oriented Design." },
      { name: "Arrays & Hashing", level: "Core DSA", description: "Sliding window, Two-pointer technique, Prefix sums, Hash Map lookup optimization." },
      { name: "Binary Search", level: "Core DSA", description: "Search space reduction, Monotonic functions, Lower/Upper bound variants." },
      { name: "Linked Lists", level: "Core DSA", description: "Pointer manipulation, Fast & Slow pointers, In-place reversal, Merge operations." },
      { name: "Recursion & Backtracking", level: "Core DSA", description: "Subsets, Permutations, N-Queens logic, State space tree traversal." },
      { name: "Dynamic Programming", level: "Core DSA", description: "Memoization (Top-down), Tabulation (Bottom-up), Knapsack variants, Space optimization." }
    ]
  },
  socialLinks: {
    github: "https://github.com/Abhishekjha0009",
    linkedin: "https://www.linkedin.com/in/abhishek-jha-756641325/",
    leetcode: "https://leetcode.com/u/abhishek_dsa/",
    email: "Officialabhishek9574@gmail.com"
  },
  aboutBio: [
    "I am a Computer Science undergraduate at NIET passionate about full-stack engineering, clean API design, and algorithm optimization.",
    "My focus spans building robust MERN applications with real-time capabilities, writing optimized C++ algorithms, and crafting polished interactive user experiences.",
    "Beyond software development, I enjoy cricket, continuous learning, analytical problem solving, and personal growth."
  ],
  interests: ["Cricket", "Algorithmic Problem Solving", "Continuous Learning", "System Design", "Personal Growth"]
};

export const FALLBACK_PROJECTS: ProjectData[] = [
  {
    id: "onecart",
    title: "OneCart",
    slug: "onecart",
    tagline: "Full-stack MERN e-commerce platform with sub-100ms REST API response times & Razorpay integration",
    category: "MERN",
    problem: "Traditional e-commerce templates lack dedicated multi-role administration, media upload pipelines, and fast API execution under concurrent user load.",
    architecture: "MERN stack platform with Firebase Authentication, Cloudinary CDN asset pipelines, Razorpay payment gateway integration, and MongoDB optimized indexing achieving <100ms API latency.",
    solution: "Engineered a scalable e-commerce application handling 3 distinct user roles across 10+ pages, paired with a complete Admin CRUD control panel for orders, products, and users.",
    features: [
      "Firebase Google Authentication + JWT session security",
      "Multi-Role System (Customer, Product Manager, Admin)",
      "Admin Dashboard with full CRUD on 4+ data entities",
      "Cloudinary Image Pipeline with Multer file handling",
      "Razorpay Gateway Integration for seamless checkout flow",
      "Sub-100ms RESTful API response time with MongoDB indexing"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Tailwind CSS", "Cloudinary", "Multer", "Razorpay"],
    githubUrl: "https://github.com/Abhishekjha0009/OneCart",
    liveUrl: "https://github.com/Abhishekjha0009/OneCart",
    featured: true,
    order: 1
  },
  {
    id: "smartwaste",
    title: "SmartWaste",
    slug: "smartwaste",
    tagline: "Full-stack MERN municipal waste management platform with real-time Socket.IO & GIS Leaflet mapping",
    category: "Real-Time",
    problem: "Municipal waste collection lacks real-time dispatching between citizens, field workers, and city authorities, causing delayed pickups and inefficient route planning.",
    architecture: "Event-driven MERN architecture utilizing Socket.IO for real-time pickup alerts, Leaflet GIS mapping for spatial report tagging, and Recharts for administrative load analytics.",
    solution: "Developed a role-based waste management platform connecting 4 distinct stakeholders (Citizen, Worker, Authority, Admin) with live waste reporting and status dispatching.",
    features: [
      "4-Role Access Control System (Citizen, Worker, Authority, Admin)",
      "Real-Time Pickup Dispatch & Status Updates via Socket.IO",
      "Interactive Waste Reporting with Leaflet & OpenStreetMap GIS",
      "Administrative Load Analytics & Charts with Recharts",
      "Cloudinary Media Upload for Waste Hazard Evidence Verification",
      "Restricted Route Access & Authority Approval Workflows"
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Leaflet", "OpenStreetMap", "Recharts", "Tailwind CSS", "Cloudinary", "JWT"],
    githubUrl: "https://github.com/Abhishekjha0009",
    liveUrl: "https://github.com/Abhishekjha0009",
    featured: true,
    order: 2
  },
  {
    id: "dreamhome",
    title: "DreamHome",
    slug: "dreamhome",
    tagline: "Real-estate property discovery platform with AI-powered conversational search agent",
    category: "Full Stack",
    problem: "Property buyers struggle to quickly filter complex property listings using rigid static filters.",
    architecture: "Single-page React frontend backed by Express REST API, client state management via React Context API, and an integrated AI conversational search agent.",
    solution: "Created a modern real-estate web application featuring interactive property browsing, REST API listing management, and an AI chat assistant that suggests matched properties from natural language prompts.",
    features: [
      "AI-Powered Property Chat Agent for natural language queries",
      "Property Browsing with live filtering & quick search",
      "RESTful API Integration for Property Listing CRUD operations",
      "State Management using React Context API & custom hooks",
      "Responsive luxury UI styled with Tailwind CSS & Vite"
    ],
    technologies: ["React.js", "Vite", "Tailwind CSS", "Express.js", "Node.js", "Axios", "Context API"],
    githubUrl: "https://github.com/Abhishekjha0009/Real-Estate",
    liveUrl: "https://github.com/Abhishekjha0009/Real-Estate",
    featured: true,
    order: 3
  }
];

export const FALLBACK_TECHNOLOGIES: TechnologyData[] = [
  { name: "Next.js", category: "Frontend", iconName: "nextjs", highlight: true },
  { name: "React", category: "Frontend", iconName: "react", highlight: true },
  { name: "Node.js", category: "Backend", iconName: "nodejs", highlight: true },
  { name: "Express.js", category: "Backend", iconName: "express", highlight: true },
  { name: "MongoDB", category: "Database & Cloud", iconName: "mongodb", highlight: true },
  { name: "JavaScript", category: "Languages & Tools", iconName: "javascript", highlight: true },
  { name: "TypeScript", category: "Languages & Tools", iconName: "typescript", highlight: true },
  { name: "Tailwind CSS", category: "Frontend", iconName: "tailwindcss", highlight: true },
  { name: "Three.js", category: "Frontend", iconName: "threejs", highlight: true },
  { name: "React Three Fiber", category: "Frontend", iconName: "r3f", highlight: true },
  { name: "GSAP", category: "Frontend", iconName: "gsap", highlight: true },
  { name: "Sanity CMS", category: "Database & Cloud", iconName: "sanity", highlight: true },
  { name: "Socket.IO", category: "Backend", iconName: "socketio", highlight: true },
  { name: "Supabase", category: "Database & Cloud", iconName: "supabase", highlight: false },
  { name: "Git", category: "Languages & Tools", iconName: "git", highlight: false },
  { name: "GitHub", category: "Languages & Tools", iconName: "github", highlight: true },
  { name: "C++", category: "Languages & Tools", iconName: "cpp", highlight: true },
  { name: "SQL", category: "Database & Cloud", iconName: "sql", highlight: false }
];
