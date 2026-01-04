import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Code2, FileCode, Braces, FileType, Atom, Wind,
  Server, Database, Flame, Table, Plug, CloudLightning,
  GitBranch, Code, Figma, Send, Package, Globe,
  Smartphone, Lightbulb, LayoutList, Binary, Palette, Users
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  icon: LucideIcon;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Core Technologies",
    skills: [
      { name: "HTML5", icon: FileCode },
      { name: "CSS3", icon: Palette },
      { name: "JavaScript", icon: Braces },
      { name: "TypeScript", icon: FileType },
      { name: "React.js", icon: Atom },
      { name: "Tailwind CSS", icon: Wind },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Code2 },
      { name: "Supabase", icon: CloudLightning },
      { name: "PostgreSQL", icon: Database },
      { name: "REST APIs", icon: Plug },
      { name: "Firebase", icon: Flame },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", icon: GitBranch },
      { name: "VS Code", icon: Code },
      { name: "Figma", icon: Figma },
      { name: "Postman", icon: Send },
      { name: "npm/yarn", icon: Package },
      { name: "Vercel", icon: Globe },
    ],
  },
  {
    title: "Concepts & Practices",
    skills: [
      { name: "Responsive Design", icon: Smartphone },
      { name: "Problem Solving", icon: Lightbulb },
      { name: "Data Structures", icon: LayoutList },
      { name: "Algorithms", icon: Binary },
      { name: "UI/UX Principles", icon: Palette },
      { name: "Agile Methodology", icon: Users },
    ],
  },
];

const SkillCard = ({ skill, index, inView }: { skill: Skill; index: number; inView: boolean }) => {
  const Icon = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex flex-col items-center p-5 rounded-xl bg-surface/30 border border-border/20 hover:border-primary/50 hover:bg-surface/50 transition-all duration-300 group hover:-translate-y-1"
    >
      <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
        <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
      </div>
      <span className="text-sm font-medium text-center text-foreground/90">{skill.name}</span>
    </motion.div>
  );
};

export const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-surface/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03)_0%,transparent_50%)]" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The technologies and tools I've mastered on my journey to becoming a full-stack developer
          </p>
        </motion.div>

        <div className="grid gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={categoryIndex * 6 + skillIndex}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
