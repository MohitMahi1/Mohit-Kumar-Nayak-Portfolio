import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, GraduationCap, KeyRound, Stethoscope, Newspaper, Mail, Film, Smartphone, BarChart3, FileCode, Heart, TrendingUp, Eye, X } from "lucide-react";
import { SectionDivider } from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";
import edtechDashboard from "@/assets/edtech-dashboard.png";

interface Project {
  id: number;
  title: string;
  description: string;
  icon: any;
  tech: string[];
  category: string;
  githubUrl?: string;
  gradient: string;
  isInternship?: boolean;
  dashboardImage?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Student Management System",
    description: "Complete student management system with CRUD operations and database integration.",
    icon: GraduationCap,
    tech: ["Java", "Spring Boot", "Spring REST", "Spring MVC", "MySQL"],
    category: "Backend",
    githubUrl: "https://github.com/MohitMahi1/Student-management-System",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    title: "Password Generator",
    description: "Secure password generator mobile app with customizable options.",
    icon: KeyRound,
    tech: ["JavaScript", "React Native"],
    category: "Mobile",
    githubUrl: "https://github.com/MohitMahi1/Password-Generator",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Doctor Appointment App MEDICOR",
    description: "Full-stack healthcare app for booking doctor appointments with JWT authentication.",
    icon: Stethoscope,
    tech: ["Java", "Spring Boot", "Spring Data JPA", "JWT", "React Native", "Redux Toolkit"],
    category: "Full-Stack",
    githubUrl: "https://github.com/MohitMahi1/Doctor-Appointment-App-MEDICOR",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    id: 4,
    title: "NewsHub Smart News Feed",
    description: "Smart news aggregator app with real-time news from multiple sources.",
    icon: Newspaper,
    tech: ["JavaScript", "React Native", "NewsAPI"],
    category: "Mobile",
    githubUrl: "https://github.com/MohitMahi1/NewsHub-Smart-News-Feed",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Email Generator App Backend",
    description: "AI-powered email generation backend using Gemini API.",
    icon: Mail,
    tech: ["Java", "Spring REST", "Postman", "Gemini API"],
    category: "Backend",
    githubUrl: "https://github.com/MohitMahi1/Email-Generator-App-Backend",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 6,
    title: "Movie Review Text Analysis",
    description: "NLP-based sentiment analysis on movie reviews with visualization.",
    icon: Film,
    tech: ["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn", "NLTK", "WordCloud"],
    category: "Data Analysis",
    githubUrl: "https://github.com/MohitMahi1/Movie-Review-Text-Analysis",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    id: 7,
    title: "Smart Phone EDA Analysis",
    description: "Exploratory data analysis on smartphone market data with statistical insights.",
    icon: Smartphone,
    tech: ["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn", "EDA"],
    category: "Data Analysis",
    githubUrl: "https://github.com/MohitMahi1/Smart-Phone-EDA-Analysis",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    id: 8,
    title: "EdTech Course Analysis Dashboard",
    description: "Interactive Power BI dashboard for analyzing online course data.",
    icon: BarChart3,
    tech: ["Python", "Power BI"],
    category: "Power BI",
    githubUrl: "https://github.com/MohitMahi1/Ede-Tech-Course-Analysis-Dashboard",
    gradient: "from-indigo-500 to-blue-500",
    dashboardImage: edtechDashboard,
  },
  {
    id: 9,
    title: "Portfolio Website",
    description: "Personal portfolio with modern design, animations, and contact form.",
    icon: FileCode,
    tech: ["React", "Tailwind", "Framer Motion"],
    category: "Frontend",
    gradient: "from-fuchsia-500 to-purple-500",
  },
  {
    id: 10,
    title: "MUIRL Dating App",
    description: "Internship project - Built splash screen, login, and user detail pages for Meet Up In Real Life app.",
    icon: Heart,
    tech: ["React Native", "Frontend Development"],
    category: "Internship",
    gradient: "from-rose-500 to-pink-500",
    isInternship: true,
  },
  {
    id: 11,
    title: "Investment App (Saudi Arabia)",
    description: "Internship project - Implemented multilingual support (English/Arabic) using i18next.",
    icon: TrendingUp,
    tech: ["React Native", "i18next", "Multilingual"],
    category: "Internship",
    gradient: "from-green-500 to-emerald-500",
    isInternship: true,
  },
];

const categories = ["All", "Full-Stack", "Backend", "Mobile", "Data Analysis", "Power BI", "Frontend", "Internship"];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [dashboardPreview, setDashboardPreview] = useState<string | null>(null);
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
              size="sm"
              className={`rounded-full px-5 transition-all duration-300 ${
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
                  {/* Icon & Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="w-7 h-7 text-white" />
                    </div>
                    {project.isInternship && (
                      <span className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-secondary-foreground border border-secondary/30">
                        Internship
                      </span>
                    )}
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
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* GitHub Link */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-border hover:border-primary/50 hover:bg-primary/10"
                      >
                        <Github size={16} className="mr-2" />
                        View on GitHub
                      </Button>
                    </a>
                  )}

                  {/* Dashboard Preview Button */}
                  {project.dashboardImage && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full mt-2 border-[#df78e3]/50 hover:border-[#df78e3] hover:bg-[#df78e3]/10 text-[#df78e3]"
                      onClick={() => setDashboardPreview(project.dashboardImage!)}
                    >
                      <Eye size={16} className="mr-2" />
                      See Dashboard
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <SectionDivider />
      </div>

      {/* Dashboard Preview Modal */}
      <AnimatePresence>
        {dashboardPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setDashboardPreview(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                size="icon"
                variant="ghost"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={() => setDashboardPreview(null)}
              >
                <X size={24} />
              </Button>
              <img
                src={dashboardPreview}
                alt="Dashboard Preview"
                className="w-full rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
