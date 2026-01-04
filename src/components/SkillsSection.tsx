import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
  },
  {
    title: "Framework",
    skills: [
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Spring Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Data JPA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "REST API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Spring Security", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    ],
  },
  {
    title: "Data Science & Analytics",
    skills: [
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
      { name: "Seaborn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    title: "Front-end",
    skills: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Google Colab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
      { name: "Kaggle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original.svg" },
      { name: "MS Office", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
    ],
  },
];

const SkillCard = ({ skill, index, inView }: { skill: Skill; index: number; inView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex flex-col items-center p-5 rounded-xl bg-surface/30 border border-border/20 hover:border-primary/50 hover:bg-surface/50 transition-all duration-300 group hover:-translate-y-1"
    >
      <div className="w-14 h-14 mb-3 flex items-center justify-center rounded-lg bg-white/10 group-hover:bg-white/20 transition-all duration-300">
        <img 
          src={skill.icon} 
          alt={skill.name} 
          className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
        />
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
