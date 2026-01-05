import { motion } from "framer-motion";
import { Heart, ArrowUp, Github, Linkedin, Mail, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/MohitMahi1", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mohit-kumar-b37539232/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:mahi500mohit@gmail.com", label: "Email" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative py-16 bg-surface/50 border-t border-border/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(139,92,246,0.03)_0%,transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="text-3xl font-bold gradient-text mb-8"
            whileHover={{ scale: 1.05 }}
          >
            DevPortfolio
          </motion.a>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ y: -3 }}
                className="p-3 rounded-full bg-surface border border-border/30 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Buy Me a Coffee */}
          <motion.a
            href="https://buymeacoffee.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-3 mb-8 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 hover:bg-amber-500/30 transition-all"
          >
            <Coffee size={18} />
            <span className="text-sm font-medium">Buy me a coffee</span>
          </motion.a>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center mb-2">
            © 2025 Mohit Kumar Nayak. All rights reserved.
          </p>
          <p className="text-muted-foreground/70 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-rose-500" /> using React, TypeScript & Tailwind
          </p>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full border-border/50 hover:border-primary/50 hover:bg-primary/10"
            >
              <ArrowUp size={18} />
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
