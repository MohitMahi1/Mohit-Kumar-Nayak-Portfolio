import { motion } from "framer-motion";

export const SectionDivider = () => {
  return (
    <div className="w-full flex justify-center mt-16">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-md h-[2px]"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm" />
        {/* Main line */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
        {/* Center dot */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50" />
      </motion.div>
    </div>
  );
};
