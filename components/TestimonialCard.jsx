import { motion } from "framer-motion";

export default function TestimonialCard({ quote, author, role }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="paper-panel relative overflow-hidden p-8"
    >
      <div className="paper-grain" />
      <blockquote className="relative z-10 text-2xl leading-tight tracking-tight text-ink md:text-3xl">
        "{quote}"
      </blockquote>
      <figcaption className="relative z-10 mt-6 text-sm uppercase tracking-[0.16em] text-ink/65">
        {author} - {role}
      </figcaption>
    </motion.figure>
  );
}
