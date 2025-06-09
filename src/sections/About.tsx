import {
  motion
} from "framer-motion";
import AnimatedBlob from "@/components/AnimatedBlob";
import SectionHeader from "@/components/section-heading.tsx";
import Skills from "./skills";
import {
  Code,
  FileCode,
  Server,
} from "lucide-react";

interface SkillItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function SkillItem({
  icon, title, description, delay
}: SkillItemProps) {
  return (
    <motion.div
      className="flex items-start gap-4 p-4 bg-accent border border-border  rounded-lg"
      initial={ { opacity: 0, y: 20 }}
      whileInView={ { opacity: 1, y: 0 }}
      transition={ { delay, duration: 0.5 }}
      viewport={ { once: true, margin: "-50px" }}
      >
      <div className="mt-1 p-2 bg-primary/10 text-primary rounded-md">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-lg mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const skills = [{
    icon: <Code className="h-5 w-5" />,
    title: "Frontend Development",
    description: "I build responsive UIs with React, Next.js, and modern CSS frameworks.",
  },
    {
      icon: <Server className="h-5 w-5" />,
      title: "Backend Development",
      description: "I create APIs with Node.js, Express, and database management.",
    },
    {
      icon: <FileCode className="h-5 w-5" />,
      title: "Full Stack Integration",
      description: "I connect frontend and backend with RESTful APIs",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden w-full">
      <div className="absolute -left-40 top-40 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute -right-40 bottom-40 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl opacity-30" />

      <div className="section-container relative z-10">

        <div className="w-full flex flex-col md:items-center md:flex-row gap-6 md:gap-8 ">
          <div className="md:flex-[1.5]">
            <SectionHeader title="About Me">
              I'm a passionate Full-Stack Web Developer dedicated to transforming ideas into robust, user-centric digital solutions. With expertise in both frontend and backend development, I build responsive, high-performance web applications that deliver seamless user experiences.
              <br /><br />
          My toolkit includes modern technologies like React, Next.js, Node.js, Express, MongoDB etc, allowing me to architect scalable systems from concept to deployment. I enhance interactivity with smooth animations using GSAP and Framer Motion, ensuring engaging interfaces.
          <br /> <br />
      What drives me is solving complex challenges with clean, efficient code—whether crafting intuitive UIs or designing RESTful APIs. I prioritize maintainable code, follow industry best practices, and stay updated with evolving web technologies to build future-proof solutions.
    </SectionHeader>
  </div>

  <motion.div
    className="flex justify-center md:flex-[1]"
    initial={ { opacity: 0, scale: 0.8 }}
    whileInView={ { opacity: 1, scale: 1 }}
    transition={ { duration: 0.8 }}
    viewport={ { once: true }}
    >
    <div className="relative">
      <AnimatedBlob
        imageUrl="/aloy.jpg"
        size="md"
        className=""
        />
      <div className="absolute -bottom-4 -right-4 glass rounded-lg p-3 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium">Available for work</span>
        </div>
      </div>
    </div>
  </motion.div>
</div>




  <div className="grid grid-cols-1 gap-16">
    <div className="mt-[2rem] space-y-8">

      <Skills />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <SkillItem
            key={skill.title}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
            delay={index * 0.1}
            />
        ))}
      </div>
    </div>
  </div>
</div>
</section>
);
}