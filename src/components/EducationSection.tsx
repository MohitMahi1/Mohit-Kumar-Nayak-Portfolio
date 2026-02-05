import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, School, BookOpen } from "lucide-react";
import { SectionDivider } from "@/components/SectionDivider";

interface EducationItem {
  year: string;
  title: string;
  institution: string;
  description: string;
  score: string;
  icon: any;
}

const educationItems: EducationItem[] = [
  {
    year: "2025",
    title: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Gandhi Institute For Technology, Bhubaneswar",
    description: "Recently completed B.Tech degree with focus on computer science and engineering fundamentals.",
    score: "CGPA: 7.61",
    icon: GraduationCap,
  },
  {
    year: "2021",
    title: "12th / Intermediate in Science Stream (PCM IT)",
    institution: "Govt. Higher Secondary School, Chatrapur",
    description: "Completed higher secondary education with Physics, Chemistry, Mathematics and IT.",
    score: "Percentage: 74%",
    icon: School,
  },
  {
    year: "2019",
    title: "10th / Matriculation",
    institution: "Saraswati Sishu Vidya Mandir, Chatrapur",
    description: "Completed secondary education with strong academic foundation.",
    score: "Percentage: 74.83%",
    icon: BookOpen,
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
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey that built the foundation for my development career
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
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
                  {/* Year Badge */}
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full mb-4">
                    {item.year}
                  </span>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-2 rounded-lg bg-primary/20 text-primary">
                      <item.icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold flex-1">{item.title}</h3>
                  </div>

                  {/* Institution */}
                  <p className="text-primary/80 font-medium text-sm mb-2">
                    {item.institution}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {/* Score */}
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-secondary/20 text-secondary rounded-full">
                    {item.score}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <SectionDivider />
      </div>
    </section>
  );
};
