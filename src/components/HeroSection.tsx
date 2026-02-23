import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionDivider } from "@/components/SectionDivider";
import profilePhoto from "@/assets/profile-photo.png";

const socialLinks = [
  { icon: Github, href: "https://github.com/MohitMahi1", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mohit-kumar-b37539232/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:mahi500mohit@gmail.com", label: "Email" },
];

const FloatingParticle = ({ delay, size, left, top }: { delay: number; size: number; left: string; top: string }) => (
  <motion.div
    className="absolute rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 particle"
    style={{
      width: size,
      height: size,
      left,
      top,
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 0.5, scale: 1 }}
    transition={{ delay, duration: 1 }}
  />
);

export const HeroSection = () => {
  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 animate-gradient" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Floating Particles */}
      <FloatingParticle delay={0} size={6} left="10%" top="20%" />
      <FloatingParticle delay={0.2} size={8} left="85%" top="15%" />
      <FloatingParticle delay={0.4} size={5} left="75%" top="70%" />
      <FloatingParticle delay={0.6} size={10} left="20%" top="80%" />
      <FloatingParticle delay={0.8} size={7} left="60%" top="30%" />
      <FloatingParticle delay={1} size={4} left="30%" top="50%" />
      <FloatingParticle delay={1.2} size={9} left="90%" top="60%" />
      <FloatingParticle delay={1.4} size={6} left="5%" top="40%" />

      {/* Glow Effects */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="relative mb-8"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-secondary to-primary opacity-30 blur-2xl animate-pulse" />
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary to-secondary opacity-50 blur-xl" />

            <div className="relative w-44 h-44 rounded-full bg-gradient-to-br from-primary to-secondary p-1 animate-pulse-glow shadow-2xl shadow-primary/50">

              <div className="w-full h-full rounded-full bg-surface overflow-hidden flex items-center justify-center">

                <img
                  src={profilePhoto}
                  alt="Mohit Kumar Nayak"
                  className="w-full h-full object-cover object-[center_top]"
                />

              </div>

            </div>
          </motion.div>

          {/* Greeting */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            Hello, I'm{" "}
            <span className="gradient-text">Mohit Kumar Nayak</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 h-10"
          >
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "Data Analytics Enthusiast",
                2000,
                "Machine Learning Explorer",
                2000,
                "AI & Deep Learning Learner",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-foreground"
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg"
          >
            Passionate about building web applications and exploring Data Science.
            Currently diving into Machine Learning, Deep Learning, and Agentic AI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              onClick={handleScrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-primary/40 hover:-translate-y-1"
            >
              View My Projects
            </Button>
            <Button
              onClick={handleScrollToContact}
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:-translate-y-1"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-surface-light/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ChevronDown className="animate-bounce-slow" size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
