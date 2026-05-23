import { motion } from "framer-motion";

export default function FloatingPaper({ className = "", children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.7, delay }}
      className={`float-paper relative rounded-2xl border border-ink/10 bg-white/70 p-5 shadow-paper backdrop-blur ${className}`}
    >
      <div className="paper-grain" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
