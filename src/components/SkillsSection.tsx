import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Core Technologies",
    skills: [
      { name: "HTML5", level: 90, color: "from-orange-500 to-red-500" },
      { name: "CSS3", level: 85, color: "from-blue-500 to-indigo-500" },
      { name: "JavaScript", level: 88, color: "from-yellow-400 to-orange-500" },
      { name: "TypeScript", level: 80, color: "from-blue-600 to-blue-400" },
      { name: "React.js", level: 85, color: "from-cyan-400 to-blue-500" },
      { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-cyan-500" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", level: 75, color: "from-green-500 to-emerald-500" },
      { name: "Express.js", level: 75, color: "from-gray-500 to-gray-400" },
      { name: "Supabase", level: 80, color: "from-emerald-500 to-green-400" },
      { name: "PostgreSQL", level: 70, color: "from-blue-700 to-blue-500" },
      { name: "REST APIs", level: 80, color: "from-purple-500 to-pink-500" },
      { name: "Firebase", level: 70, color: "from-amber-500 to-orange-500" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 85, color: "from-gray-600 to-gray-400" },
      { name: "VS Code", level: 95, color: "from-blue-500 to-blue-400" },
      { name: "Figma", level: 75, color: "from-purple-500 to-pink-500" },
      { name: "Postman", level: 80, color: "from-orange-500 to-red-500" },
      { name: "npm/yarn", level: 85, color: "from-red-500 to-red-400" },
      { name: "Vercel", level: 80, color: "from-gray-700 to-gray-500" },
    ],
  },
  {
    title: "Concepts & Practices",
    skills: [
      { name: "Responsive Design", level: 90, color: "from-pink-500 to-rose-500" },
      { name: "Problem Solving", level: 88, color: "from-violet-500 to-purple-500" },
      { name: "Data Structures", level: 75, color: "from-cyan-500 to-blue-500" },
      { name: "Algorithms", level: 72, color: "from-indigo-500 to-violet-500" },
      { name: "UI/UX Principles", level: 80, color: "from-rose-500 to-pink-500" },
      { name: "Agile Methodology", level: 70, color: "from-green-500 to-teal-500" },
    ],
  },
];

const SkillCircle = ({ skill, index, inView }: { skill: Skill; index: number; inView: boolean }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (skill.level / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center p-4 rounded-xl bg-surface/30 border border-border/20 hover:border-primary/50 hover:bg-surface/50 transition-all duration-300 group"
    >
      <div className="relative w-24 h-24 mb-3">
        <svg className="w-full h-full transform -rotate-90">
          {/* Background Circle */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            className="text-muted/30"
          />
          {/* Progress Circle */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            className={`bg-gradient-to-r ${skill.color}`}
            style={{
              stroke: "url(#gradient-" + index + ")",
              strokeDasharray: circumference,
              strokeDashoffset: inView ? strokeDashoffset : circumference,
              transition: "stroke-dashoffset 1.5s ease-out",
              transitionDelay: `${index * 0.1}s`,
            }}
          />
          <defs>
            <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" />
            </linearGradient>
          </defs>
        </svg>
        {/* Percentage */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold group-hover:scale-110 transition-transform">
            {skill.level}%
          </span>
        </div>
      </div>
      <span className="text-sm font-medium text-center">{skill.name}</span>
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
                  <SkillCircle
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
