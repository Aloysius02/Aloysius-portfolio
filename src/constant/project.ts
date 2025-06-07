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

const Frontend: ProjectType[] = [{
  id: 1,
  title: "XORA – AI Video Editor Landing Page",
  description:
  "A responsive and modern SaaS landing page for XORA, featuring smooth animations, sleek transitions, and 3D visuals. Built for a seamless user experience across all devices.",
  image: "/projects/xora.jpg",
  tags: ["Nextjs",
    "TailwindCSS",
    "TypeScript",
    "Framer-motion"],
  demoUrl: "https://xorao.vercel.app/",
  repoUrl: "https://github.com/Aloysius02/Xora.git",
  category: "frontend",
},
  {
    id: 2,
    title: "Interactive Developer portfolio",
    description:
    "A sleek and modern portfolio website crafted with a focus on clean UI, smooth animations, and rich user experience. Features include dark mode, customizable primary theme colors, and eye-catching animation effects powered by GSAP and Framer Motion.",
    image: "/projects/chosen.jpg",
    tags: [
      "Nextjs",
      "TailwindCSS",
      "TypeScript",
      "Gsap",
      "Framer-motion",
      "Zustand",
    ],
    demoUrl: "https://choseno.vercel.app",
    repoUrl: "https://github.com/Aloysius02/chosen-portfolio.git",
    category: "frontend",
  },
  {
    id: 3,
    title: "OptimoAI – AI SaaS Landing page",
    description:
    "A visually striking, responsive landing page with dark mode support, smooth UI elements, and a clean, modern layout designed to boost user engagement",
    image: "/projects/optimoai.jpg",
    tags: ["React",
      "Vite",
      "TailwindCSS",
      "TypeScript",
      "Zustand"],
    demoUrl: "https://optimoai.vercel.app",
    repoUrl: "https://github.com/Aloysius02/OptimoAi.git",
    category: "frontend",
  },
  {
    id: 4,
    title: "HooBank – Next-Gen Banking Landing page",
    description:
    "A beautifully crafted landing page with a futuristic aesthetic, featuring vibrant gradients, smooth UI transitions, and fully responsive layouts. It showcases sophisticated typography, a modern dark theme, and a clean, minimal design optimized for seamless performance across all devices.",
    image: "/projects/hookbank.jpg",
    tags: ["React",
      "TailwindCSS"],
    demoUrl: "https://hookbanki.vercel.app",
    repoUrl: "https://github.com/Aloysius02/Hookbank.git",
    category: "frontend",
  },
];

const Fullstack: ProjectType[] = [{
  id: 1,
  title: "Lumilearn – Learning management system",
  description:
  "A modern Learning Management System (LMS) built for online education. Instructors can create and manage courses, while learners track their progress, complete lessons, and take quizzes—all within a clean, responsive interface.",
  image: "/projects/lumilearn.jpg",
  tags: ["Nextjs",
    "Sanity",
    "Tailwind CSS",
    "TypeScript",
    "Clerk"],
  demoUrl: "https://lumilearni.vercel.app/",
  repoUrl: "https://github.com/Aloysius02/lumilearn.git",
  category: "fullstack",
},
  {
    id: 2,
    title: "Threads Clone — Real-Time Community Discussions",
    description:
    "A Next.js-powered discussion platform featuring seamless authentication with Clerk, nested threads for structured conversations, and real-time notifications. Users can create threads, comment, search, and engage in vibrant, structured conversations with fast, responsive performance.",
    image: "/projects/threado.jpg",
    tags: ["Nextjs",
      "Mongodb",
      "TypeScript",
      "uploadthing",
      "Clerk"],
    demoUrl: "https://threadoi.vercel.app/",
    repoUrl: "https://github.com/Aloysius02/Threado.git",
    category: "fullstack",
  },
  {
    id: 3,
    title: "Zapchat – chat application",
    description: `A simple real-time chat application built with Socket.IO, enabling users to send and receive messages instantly through WebSocket connections.`,
    image: "/projects/zapchat.jpg",
    tags: [
      "Nextjs",
      "Socket.io",
      "Mongodb",
      "TypeScript",
      "Framer-motion",
    ],
    demoUrl: "https://zapchato.vercel.app",
    repoUrl: "https://github.com/Aloysius02/zapchat.git",
    category: "fullstack",
  },
];

export const Projects: ProjectType[] = [...Frontend, ...Fullstack];