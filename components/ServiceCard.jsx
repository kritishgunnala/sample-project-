import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiceCard({ title, description, href, price, index = 0, image }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.65, delay: index * 0.06 }}
      whileHover={{ y: -8 }}
      className="paper-panel relative overflow-hidden p-7"
    >
      <div className="paper-grain" />
      <div className="relative z-10 flex h-full flex-col">
        {image ? (
          <div className="relative mb-6 h-44 overflow-hidden rounded-2xl border border-ink/10">
            <img src={image} alt={`${title} visual`} className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
          </div>
        ) : null}
        <p className="editorial-kicker">Service</p>
        <h3 className="mt-3 font-display text-4xl tracking-hero">{title}</h3>
        <p className="mt-4 text-lg leading-relaxed text-ink/75">{description}</p>

        <div className="mt-8 flex items-center justify-between gap-3">
          <span className="rounded-full bg-cobalt/10 px-4 py-2 text-sm font-semibold text-cobalt">{price}</span>
          <Link href={href} className="pill-link">
            Explore
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
