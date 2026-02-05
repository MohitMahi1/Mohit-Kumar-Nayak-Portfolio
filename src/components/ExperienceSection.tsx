import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin, Code, Smartphone, Globe, Database } from "lucide-react";
import { SectionDivider } from "@/components/SectionDivider";

const experiences = [
  {
    title: "React Native App Developer Intern",
    company: "Mobiloitte Technology India Pvt Ltd",
    period: "Dec 2024 - April 2025",
    description: "Worked on mobile application development using React Native, including API integration and working with real-world data from backend systems.",
    skills: ["React Native", "JavaScript", "API Integration", "Redux"],
  },
  {
    title: "Web Development Intern",
    company: "Aspire Infolab Pvt Ltd",
    period: "Aug 2023 - Sep 2023",
    description: "Gained hands-on experience in web development technologies and learned industry-standard practices for building web applications.",
    skills: ["HTML", "CSS", "JavaScript", "Web Development"],
  },
];

const floatingIcons = [
  { Icon: Code, delay: 0, x: 20, y: 30 },
  { Icon: Smartphone, delay: 0.5, x: 80, y: 60 },
  { Icon: Globe, delay: 1, x: 40, y: 120 },
  { Icon: Database, delay: 1.5, x: 70, y: 180 },
];

export const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and internship experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Timeline */}
          <div className="max-w-xl">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Briefcase size={12} className="text-primary-foreground" />
                </div>

                {/* Content Card */}
                <div className="glass-card p-6 ml-4 hover:border-primary/50 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1 sm:mt-0">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-primary font-medium mb-3">
                    <MapPin size={14} />
                    <span>{exp.company}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Professional Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-80 h-80">
              {/* Central rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
              />
              
              {/* Second rotating ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border-2 border-dashed border-secondary/30"
              />

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 20px hsl(var(--primary) / 0.3)",
                      "0 0 40px hsl(var(--primary) / 0.5)",
                      "0 0 20px hsl(var(--primary) / 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                >
                  <Briefcase size={40} className="text-primary-foreground" />
                </motion.div>
              </div>

              {/* Floating icons */}
              {floatingIcons.map(({ Icon, delay, x, y }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -15, 0],
                  } : {}}
                  transition={{ 
                    opacity: { delay: delay + 0.5, duration: 0.5 },
                    scale: { delay: delay + 0.5, duration: 0.5 },
                    y: { delay: delay + 1, duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute"
                  style={{ left: `${x}%`, top: `${y}px` }}
                >
                  <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border border-primary/30">
                    <Icon size={20} className="text-primary" />
                  </div>
                </motion.div>
              ))}

              {/* Orbiting dots */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 8 + i * 2, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: i * 0.5
                  }}
                  className="absolute inset-0"
                  style={{ transformOrigin: "center center" }}
                >
                  <div 
                    className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-primary to-secondary"
                    style={{ 
                      top: "50%", 
                      left: i % 2 === 0 ? "-6px" : "auto",
                      right: i % 2 === 1 ? "-6px" : "auto",
                      transform: "translateY(-50%)"
                    }}
                  />
                </motion.div>
              ))}

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
                <motion.path
                  d="M160 40 L160 80"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                />
                <motion.path
                  d="M160 240 L160 280"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 1 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>

        <SectionDivider />
      </div>
    </section>
  );
};