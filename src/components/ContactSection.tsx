import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin, Clock, Check, Copy, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mahi500mohit@gmail.com");
    setCopied(true);
    toast({
      title: "Email copied!",
      description: "Email address copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "a94738ae-4bec-45c2-ae5a-95810e707ed3",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact: Message from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        toast({
          title: "Thank you!",
          description: "Your message has been sent successfully ✓",
        });
        setTimeout(() => {
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitted(false);
        }, 3000);
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/MohitMahi1", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mohit-kumar-b37539232/", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's Build <span className="gradient-text">Something Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6">Send me a message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground text-center">
                    I'll reply within 24 hours ✓
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-surface/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-surface/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-surface/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 font-semibold py-6"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            {/* Info Card */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6">Contact Info</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">mahi500mohit@gmail.com</span>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1.5 rounded-md hover:bg-primary/10 transition-colors"
                        aria-label="Copy email"
                      >
                        {copied ? (
                          <Check size={16} className="text-accent" />
                        ) : (
                          <Copy size={16} className="text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <span className="font-medium">Hyderabad, India</span>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Response Time</p>
                    <span className="font-medium">Usually within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-8 p-4 rounded-xl bg-accent/10 border border-accent/20">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-medium text-accent">
                    Available for opportunities
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Open to: Full-time roles, Internships, Freelance projects
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-3 p-4 rounded-xl bg-surface/50 border border-border/30 hover:border-primary hover:bg-primary/15 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.8),0_0_40px_rgba(139,92,246,0.4)] hover:animate-pulse"
                  >
                    <social.icon size={24} />
                    <span className="text-base font-semibold">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
