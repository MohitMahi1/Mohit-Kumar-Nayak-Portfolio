import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award, Trophy, Code, BookOpen } from "lucide-react";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon: any;
  type: "education" | "achievement" | "certification";
}

const timelineItems: TimelineItem[] = [
  {
    date: "2024",
    title: "Bachelor of Technology (Computer Science)",
    description: "Graduated from XYZ University with CGPA 8.5/10. Relevant coursework: Data Structures, Algorithms, DBMS, Web Technologies.",
    icon: GraduationCap,
    type: "education",
  },
  {
    date: "2024",
    title: "100 Days of Code Challenge",
    description: "Built 100 projects in 100 days, mastering React, TypeScript, and modern web development practices.",
    icon: Code,
    type: "achievement",
  },
  {
    date: "2023",
    title: "College Hackathon Winner",
    description: "1st Place - Built a real-time collaboration tool in 24 hours with a team of 4 developers.",
    icon: Trophy,
    type: "achievement",
  },
  {
    date: "2023",
    title: "Web Development Bootcamp",
    description: "Completed comprehensive full-stack course and built 15+ projects from scratch.",
    icon: BookOpen,
    type: "certification",
  },
  {
    date: "2023",
    title: "freeCodeCamp Certifications",
    description: "Earned Responsive Web Design, JavaScript Algorithms, and Frontend Libraries certifications.",
    icon: Award,
    type: "certification",
  },
];

export const EducationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-surface/30">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.05)_0%,transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and milestones that shaped my development career
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full transform -translate-x-1/2 mt-6 z-10 ring-4 ring-background" />

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-40px)] ${
                index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              }`}>
                <div className="glass-card p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  {/* Date Badge */}
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full mb-4">
                    {item.date}
                  </span>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`p-2 rounded-lg ${
                      item.type === "education" 
                        ? "bg-primary/20 text-primary" 
                        : item.type === "achievement"
                        ? "bg-accent/20 text-accent"
                        : "bg-secondary/20 text-secondary"
                    }`}>
                      <item.icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold flex-1">{item.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 text-center">
            <h3 className="text-xl font-bold mb-6">
              What I'm Currently <span className="gradient-text">Learning</span>
            </h3>
            <div className="space-y-4">
              {[
                { name: "Advanced React Patterns", progress: 60 },
                { name: "System Design Fundamentals", progress: 40 },
                { name: "Next.js & Server Components", progress: 50 },
              ].map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">{item.name}</span>
                    <span className="text-primary font-medium">{item.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.progress}%` } : {}}
                      transition={{ duration: 1, delay: 1 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
