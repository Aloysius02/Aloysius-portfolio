export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  category: "frontend" | "fullstack";
}

export const Projects: ProjectType[] = [{
  id: 1,
  title: "OptimoAI – AI SaaS Landing",
  description: "AA sleek, responsive landing page with dark mode, smooth UI, and modern design—built using React, Vite, and Tailwind CSS.",
  image: "/optimoai.jpg",
  tags: ["React",
    "Vite",
    "TailwindCSS",
    "TypeScript",
    "Zustand"],
  demoUrl: "https://optimoai.vercel.app",
  repoUrl: "https://github.com/Aloysius02/OptimoAi.git",
  category: "frontend"
},
];

// export const Projects: ProjectType[] = [{
//   id: 1,
//   title: "Modern E-commerce Platform",
//   description: "A full-featured e-commerce site with cart functionality, product filtering, and Stripe payment integration.",
//   image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop",
//   tags: ["React",
//     "Next.js",
//     "TailwindCSS",
//     "Stripe",
//     "MongoDB"],
//   demoUrl: "#",
//   repoUrl: "#",
//   category: "fullstack"
// },
//   {
//     id: 2,
//     title: "3D Portfolio Website",
//     description: "An interactive portfolio website featuring 3D graphics with Three.js and smooth animations.",
//     image: "https://images.unsplash.com/photo-1545235617-7a424c1a60cc?q=80&w=1480&auto=format&fit=crop",
//     tags: ["React",
//       "Three.js",
//       "Framer Motion",
//       "TailwindCSS"],
//     demoUrl: "#",
//     repoUrl: "#",
//     category: "frontend"
//   },
//   {
//     id: 3,
//     title: "Real-time Chat Application",
//     description: "A modern chat application with real-time messaging, user authentication, and message history.",
//     image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1470&auto=format&fit=crop",
//     tags: ["React",
//       "Firebase",
//       "Styled Components",
//       "WebSockets"],
//     demoUrl: "#",
//     repoUrl: "#",
//     category: "fullstack"
//   },
//   {
//     id: 4,
//     title: "REST API Service",
//     description: "A scalable REST API with authentication, rate limiting, and comprehensive documentation.",
//     image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1374&auto=format&fit=crop",
//     tags: ["Node.js",
//       "Express",
//       "MongoDB",
//       "JWT",
//       "Swagger"],
//     demoUrl: "#",
//     repoUrl: "#",
//     category: "fullstack"
//   },
//   {
//     id: 5,
//     title: "Task Management Dashboard",
//     description: "A productivity dashboard with drag-and-drop task management, charts, and progress tracking.",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
//     tags: ["React",
//       "Redux",
//       "Chart.js",
//       "TailwindCSS"],
//     demoUrl: "#",
//     repoUrl: "#",
//     category: "frontend"
//   },
//   {
//     id: 6,
//     title: "Microservice Infrastructure",
//     description: "A set of microservices for handling authentication, payments, and user management with Docker and Kubernetes.",
//     image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1470&auto=format&fit=crop",
//     tags: ["Node.js",
//       "Docker",
//       "Kubernetes",
//       "RabbitMQ",
//       "PostgreSQL"],
//     demoUrl: "#",
//     repoUrl: "#",
//     category: "fullstack"
//   }];