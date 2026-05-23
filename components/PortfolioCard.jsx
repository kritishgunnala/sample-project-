import { motion } from "framer-motion";

export default function PortfolioCard({ title, category, description, tall = false, image }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden rounded-3xl border border-ink/10 bg-white/70 p-6 shadow-paper ${
        tall ? "min-h-[380px]" : "min-h-[280px]"
      }`}
    >
      {image ? <img src={image} alt={`${title} showcase`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" /> : null}
      {image ? <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/5" /> : null}
      <div className="paper-grain" />
      <div className="absolute inset-0 bg-gradient-to-br from-cobalt/10 via-transparent to-ink/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <span className="rounded-full bg-cobalt px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            {category}
          </span>
          <h3 className={`mt-4 font-display text-3xl tracking-hero md:text-4xl ${image ? "text-white" : ""}`}>{title}</h3>
          <p className={`mt-3 max-w-[32ch] text-base leading-relaxed ${image ? "text-white/85" : "text-ink/75"}`}>{description}</p>
        </div>

        <div className={`mt-8 flex items-center justify-between text-sm font-semibold ${image ? "text-white/80" : "text-ink/60"}`}>
          <span>Cinematic Preview</span>
          <span className={`rounded-full px-3 py-1 ${image ? "border border-white/35 text-white" : "border border-ink/15 text-cobalt"}`}>
            Hover Depth
          </span>
        </div>
      </div>
    </motion.article>
  );
}
