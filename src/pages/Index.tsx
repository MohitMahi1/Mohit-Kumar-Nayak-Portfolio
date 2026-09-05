import { useRef, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const pageTransition = {
  transition: { duration: 0.5, ease: "easeOut" },
};

const Index = () => {
  const animKey = useRef(0);
  useEffect(() => { animKey.current += 1; });
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={animKey.current}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={pageVariants}
          {...pageTransition}
          className="min-h-screen bg-background text-foreground overflow-x-hidden"
        >
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Index;
