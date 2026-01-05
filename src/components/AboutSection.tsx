import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Lightbulb, Rocket, Users, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: GraduationCap,
    title: "Recent Graduate",
    description: "B.Tech in Computer Science (2024)",
  },
  {
    icon: Lightbulb,
    title: "Fast Learner",
    description: "Mastered modern web stack in 12 months",
  },
  {
    icon: Rocket,
    title: "Project Focused",
    description: "Built 10+ real-world applications",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Excellent collaboration skills",
  },
];

export const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know me better and discover what drives my passion for development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl transform -rotate-3" />
              
              {/* Main Card */}
              <div className="relative glass-card p-8 h-full flex flex-col justify-center items-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-secondary p-1 mb-6">
                  <div className="w-full h-full rounded-full bg-surface flex items-center justify-center text-6xl font-bold">
                    MK
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Mohit Kumar Nayak</h3>
                <p className="text-muted-foreground text-center">
                  Developer | Data Analytics & AI Enthusiast
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-card p-8">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Fresh Computer Science graduate with a passion for building innovative web 
                applications. Strong foundation in modern technologies including{" "}
                <span className="text-primary font-semibold">React</span>,{" "}
                <span className="text-secondary font-semibold">TypeScript</span>, and{" "}
                <span className="text-accent font-semibold">backend development</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Eager to contribute to impactful projects and grow as a developer. Quick 
                learner with excellent problem-solving skills and a drive to master new 
                technologies. I believe in writing clean, maintainable code and creating 
                exceptional user experiences.
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="p-4 rounded-xl bg-surface/50 border border-border/30 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <item.icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Download CV Button */}
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold shadow-lg shadow-primary/25"
              >
                <Download className="mr-2" size={18} />
                Download CV
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
