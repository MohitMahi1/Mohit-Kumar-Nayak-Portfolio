import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin } from "lucide-react";

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

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
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
      </div>
    </section>
  );
};
