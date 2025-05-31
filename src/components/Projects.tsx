import {
  useState
} from "react";
import {
  motion,
  AnimatePresence
} from "framer-motion";
import {
  cn
} from "@/lib/utils";
import {
  Github,
  ExternalLink
} from "lucide-react";
import {
  Button
} from "@/components/ui/button";
import {
  Badge
} from "@/components/ui/badge";

import {
  Projects,
} from "@/constant/project"



type ProjectCategory = "frontend" | "fullstack" | "all";



export default function ProjectsComp() {
  const [activeCategory,
    setActiveCategory] = useState < ProjectCategory > ("frontend");

  const filteredProjects = Projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );


  return (
    <section id="projects" className="py-20 bg-accent/30 w-full">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={ { opacity: 0, y: 20 }}
          whileInView={ { opacity: 1, y: 0 }}
          transition={ { duration: 0.8 }}
          viewport={ { once: true }}
          >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Explore my recent work across frontend and backend development.
            Each project reflects my ability to solve complex challenges through clean code, scalable systems, and innovative problem-solving.
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-accent rounded-lg">
            {[{
              id: "all", label: "All Projects"
            },
              {
                id: "frontend", label: "Frontend"
              },
              {
                id: "fullstack", label: "Fullstack"
              },
            ].map((category) => (
                <motion.button
                  key={category.id}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium relative",
                    activeCategory === category.id
                    ? "text-primary-foreground": "hover:text-foreground"
                  )}
                  onClick={() => setActiveCategory(category.id as ProjectCategory)}
                  whileHover={ { scale: 1.05 }}
                  whileTap={ { scale: 0.95 }}
                  >
                  {activeCategory === category.id && (
                    <motion.div
                      className="absolute inset-0 g3 rounded-md z-0"
                      layoutId="activeCategory"
                      transition={ { type: "spring", duration: 0.6 }}
                      />
                  )}
                  <span className={cn("relative z-10", activeCategory === category.id ? "text-white": "")}>{category.label}</span>
                </motion.button>
              ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={ { opacity: 0, y: 20 }}
            animate={ { opacity: 1, y: 0 }}
            exit={ { opacity: 0, y: -20 }}
            transition={ { duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="rounded-2xl bg-card border-border border overflow-hidden group"
                initial={ { opacity: 0, y: 20 }}
                whileInView={ { opacity: 1, y: 0 }}
                viewport={ { once: true }}
                transition={ { duration: 0.5, delay: index * 0.1 }}
                >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="icon"
                    asChild
                    className="bg-primary text-white"
                    >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    className="bg-primary text-white"
                    size="icon"
                    asChild
                    >
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  {project.description}
                </p>

                {/* Project tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} className="bg-accent text-foreground border border-border">{tag}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
            ))}
        </motion.div>
      </AnimatePresence>

    </div>
  </section>
);
}