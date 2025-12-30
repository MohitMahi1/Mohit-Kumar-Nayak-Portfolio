import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, MessageSquare, ShoppingCart, CheckSquare, Cloud, FileCode, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  icon: any;
  tech: string[];
  category: string;
  demoUrl: string;
  githubUrl: string;
  gradient: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Real-Time Chat App",
    description: "Full-stack chat application with authentication and real-time messaging capabilities.",
    icon: MessageSquare,
    tech: ["React", "Supabase", "Tailwind", "WebSocket"],
    category: "Full-Stack",
    demoUrl: "#",
    githubUrl: "#",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    title: "Task Manager Pro",
    description: "Kanban-style task management with drag-and-drop functionality and dark mode.",
    icon: CheckSquare,
    tech: ["React", "TypeScript", "DnD Kit", "LocalStorage"],
    category: "Frontend",
    demoUrl: "#",
    githubUrl: "#",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Beautiful weather app with 7-day forecast, charts, and location search.",
    icon: Cloud,
    tech: ["React", "OpenWeather API", "Recharts", "Geolocation"],
    category: "Frontend",
    demoUrl: "#",
    githubUrl: "#",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    id: 4,
    title: "E-Commerce Store",
    description: "Modern shopping interface with cart management and checkout flow.",
    icon: ShoppingCart,
    tech: ["React", "Context API", "Tailwind", "Fake Store API"],
    category: "Full-Stack",
    demoUrl: "#",
    githubUrl: "#",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Personal portfolio with modern design, animations, and contact form.",
    icon: FileCode,
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    category: "Frontend",
    demoUrl: "#",
    githubUrl: "#",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 6,
    title: "Note Taking App",
    description: "Clean note-taking app with markdown support and search functionality.",
    icon: BookOpen,
    tech: ["React", "Markdown", "IndexedDB", "Tags"],
    category: "Frontend",
    demoUrl: "#",
    githubUrl: "#",
    gradient: "from-emerald-500 to-green-500",
  },
];

const categories = ["All", "Frontend", "Full-Stack"];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-full px-6 transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/25"
                  : "border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card p-6 h-full flex flex-col hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-border hover:border-primary/50"
                    >
                      <Github size={16} className="mr-2" />
                      GitHub
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
