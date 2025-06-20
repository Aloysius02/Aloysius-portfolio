export interface TestimonialType {
  id: number;
  name: string;
  avatar: string;
  content: string
}

export const Testimonials: TestimonialType[] = [{
  id: 1,
  name: "Emeka Okoro",
  avatar: "/profile.jpg",
  content: "Aloysius has a good understanding of web development concepts. His work shows attention to detail."
},
  {
    id: 2,
    name: "Amina Yusuf",
    avatar: "/profile.jpg",
    content: "I've seen his growth as a developer. He asks good questions and implements feedback well."
  },
  {
    id: 3,
    name: "Chinedu Nwachukwu",
    avatar: "/profile.jpg",
    content: "A promising developer with solid foundation in both frontend and backend technologies."
  },
  {
    id: 4,
    name: "Folake Adebayo",
    avatar: "/profile.jpg",
    content: "Aloysius writes clean, organized code. Good potential for junior developer roles."
  },
  {
    id: 5,
    name: "Ibrahim Musa",
    avatar: "/profile.jpg",
    content: "He grasps new concepts quickly. His projects demonstrate good problem-solving skills."
  },
  {
    id: 6,
    name: "Chioma Eze",
    avatar: "/profile.jpg",
    content: "Reliable and dedicated to improving his craft. His work shows steady progress."
  },
  {
    id: 7,
    name: "Yusuf Bello",
    avatar: "/profile.jpg",
    content: "Good understanding of responsive design principles. His UIs work well across devices."
  },
  {
    id: 8,
    name: "Ngozi Okafor",
    avatar: "/profile.jpg",
    content: "Aloysius takes time to understand requirements before implementing solutions."
  },
  {
    id: 9,
    name: "Tunde Olawale",
    avatar: "/profile.jpg",
    content: "His code structure is neat and follows good practices. Easy to collaborate with."
  },
  {
    id: 10,
    name: "Bisi Adeleke",
    avatar: "/profile.jpg",
    content: "Demonstrates good debugging skills. Finds solutions to technical challenges."
  },
  {
    id: 11,
    name: "Oluwaseun Adeyemi",
    avatar: "/profile.jpg",
    content: "Shows passion for web development. Continuously working to improve his skills."
  },
  {
    id: 12,
    name: "Fatima Abubakar",
    avatar: "/profile.jpg",
    content: "Good at breaking down complex problems into manageable parts."
  },
  {
    id: 13,
    name: "Kunle Adebayo",
    avatar: "/profile.jpg",
    content: "His projects show understanding of both client and server-side development."
  },
  {
    id: 14,
    name: "Zainab Ibrahim",
    avatar: "/profile.jpg",
    content: "Pays attention to user experience in his implementations."
  },
  {
    id: 15,
    name: "Chika Okeke",
    avatar: "/profile.jpg",
    content: "Good at following documentation and implementing features accordingly."
  },
  {
    id: 16,
    name: "Mohammed Sani",
    avatar: "/profile.jpg",
    content: "Shows initiative in learning new technologies and frameworks."
  },
  {
    id: 17,
    name: "Grace Oluwaseyi",
    avatar: "/profile.jpg",
    content: "His work demonstrates solid understanding of JavaScript fundamentals."
  },
  {
    id: 18,
    name: "Sunday Ojo",
    avatar: "/profile.jpg",
    content: "Good at version control practices. Maintains clean commit history."
  },
  {
    id: 19,
    name: "Aisha Mohammed",
    avatar: "/profile.jpg",
    content: "Takes time to test his work thoroughly before deployment."
  },
  {
    id: 20,
    name: "Obinna Nwachukwu",
    avatar: "/profile.jpg",
    content: "A promising junior developer with good attitude towards learning."
  }];

// export const Testimonials: TestimonialType[] = [{
//   id: 1,
//   name: "Chosen Eqwin",
//   avatar: "/profile.jpg",
//   content: "Aloysius is a rare talent! He built our SaaS platform from scratch, combining elegant frontend design with a bulletproof backend. His code is so clean it could be a textbook example."
// },
//   {
//     id: 2,
//     name: "David Ndukwe",
//     avatar: "/profile.jpg",
//     content: "Working with Aloysius was transformative. He migrated our legacy system to a modern stack (React + Node) in half the estimated time while improving performance by 60%."
//   },
//   {
//     id: 3,
//     name: "Ezeogu Victor",
//     avatar: "/profile.jpg",
//     content: "Aloysius solved problems we didn't even know we had. His architectural decisions future-proofed our application and saved us countless hours of refactoring."
//   },
//   {
//     id: 4,
//     name: "David Kim",
//     avatar: "/profile.jpg",
//     content: "I've worked with many developers, but Aloysius stands out. He delivered our e-commerce platform 2 weeks early, implementing complex payment integrations flawlessly."
//   },
//   {
//     id: 5,
//     name: "Lisa Thompson",
//     avatar: "/profile.jpg",
//     content: "Aloysius isn't just a developer - he's a technical partner. His insights into user experience transformed our product's engagement metrics overnight."
//   },
//   {
//     id: 6,
//     name: "Robert Zhang",
//     avatar: "/profile.jpg",
//     content: "The API infrastructure Aloysius built handles 50,000+ requests per minute without breaking a sweat. His attention to optimization is unparalleled."
//   },
//   {
//     id: 7,
//     name: "Olivia Martinez",
//     avatar: "/profile.jpg",
//     content: "Aloysius implemented a real-time collaboration feature that became our app's killer feature. His WebSocket implementation is poetry in code."
//   },
//   {
//     id: 8,
//     name: "James Wilson",
//     avatar: "/profile.jpg",
//     content: "We brought Aloysius in to fix a failing project. Not only did he turn it around, but he mentored our team in best practices we still use today."
//   },
//   {
//     id: 9,
//     name: "Sophia Lee",
//     avatar: "/profile.jpg",
//     content: "Aloysius's full-stack proficiency is remarkable. He designed our database schema while simultaneously creating a stunning React interface."
//   },
//   {
//     id: 10,
//     name: "Daniel Brown",
//     avatar: "/profile.jpg",
//     content: "The automated testing suite Aloysius implemented catches 95% of bugs before they reach production. Our QA team literally applauded him."
//   },
//   {
//     id: 11,
//     name: "Emma Davis",
//     avatar: "/profile.jpg",
//     content: "Aloysius optimized our application's load time from 8 seconds to under 1. His performance tuning skills are worth their weight in gold."
//   },
//   {
//     id: 12,
//     name: "William Taylor",
//     avatar: "/profile.jpg",
//     content: "When our previous developer quit mid-project, Aloysius stepped in and not only finished it but improved the architecture significantly."
//   },
//   {
//     id: 13,
//     name: "Ava Anderson",
//     avatar: "/profile.jpg",
//     content: "Aloysius implemented a CI/CD pipeline that reduced our deployment time from hours to minutes. He's a DevOps wizard on top of everything else."
//   },
//   {
//     id: 14,
//     name: "Benjamin Clark",
//     avatar: "/profile.jpg",
//     content: "The accessibility improvements Aloysius made to our platform opened it up to 20% more users. His attention to inclusive design is exceptional."
//   },
//   {
//     id: 15,
//     name: "Mia Lewis",
//     avatar: "/profile.jpg",
//     content: "Aloysius built a custom CMS that empowered our non-technical team to manage content effortlessly. It's both powerful and intuitive."
//   },
//   {
//     id: 16,
//     name: "Henry Walker",
//     avatar: "/profile.jpg",
//     content: "Our mobile conversion rate increased by 35% after Aloysius redesigned our PWA. He understands the mobile-first approach like few others."
//   },
//   {
//     id: 17,
//     name: "Charlotte Hall",
//     avatar: "/profile.jpg",
//     content: "Aloysius implemented complex data visualizations that made our analytics dashboard the envy of our competitors. His D3.js skills are incredible."
//   },
//   {
//     id: 18,
//     name: "Alexander Young",
//     avatar: "/profile.jpg",
//     content: "The security audit Aloysius performed uncovered vulnerabilities we didn't know existed. His attention to security is absolutely top-notch."
//   },
//   {
//     id: 19,
//     name: "Amelia Allen",
//     avatar: "/profile.jpg",
//     content: "Aloysius scaled our application to handle 10x our normal traffic during a product launch without any downtime. His cloud architecture skills saved us."
//   },
//   {
//     id: 20,
//     name: "Lucas King",
//     avatar: "/profile.jpg",
//     content: "We hired Aloysius for one project and ended up retaining him for ongoing work. He's become an indispensable part of our technical team."
//   }];