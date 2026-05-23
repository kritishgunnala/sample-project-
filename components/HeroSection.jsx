import Link from "next/link";
import { motion } from "framer-motion";
import FloatingPaper from "./FloatingPaper";

const heroLabels = [
  { label: "Studio & On-Location Shoots", href: "/services#shoot", className: "left-0 top-20" },
  { label: "Post - Production", href: "/services#edit", className: "right-2 top-52" },
  { label: "High - Quality Production", href: "/services#deliver", className: "left-4 top-80" },
  { label: "Reel Shoots", href: "/services#reels", className: "right-8 top-[25rem]" }
];

export default function HeroSection() {
  return (
    <section className="section-shell pb-14 pt-16 md:pt-24">
      <div className="paper-grid-surface relative overflow-hidden rounded-[2rem] border border-ink/10 bg-white/60 px-6 py-14 shadow-paper md:px-12 md:py-20">
        <div className="paper-grain" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,82,204,0.16),transparent_38%),radial-gradient(circle_at_80%_0%,rgba(17,17,17,0.12),transparent_42%)]" />

        <div className="relative z-10 grid gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="editorial-kicker"
            >
              Cinematic Creative Agency
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08 }}
              className="mt-4 font-display text-[18vw] leading-[0.84] tracking-hero text-ink sm:text-[10rem] md:text-[8.4rem]"
            >
              Shoot.
              <br />
              Edit.
              <br />
              Deliver.
              <br />
              Repeat.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-7 max-w-[28ch] text-lg leading-relaxed text-ink/75 md:text-xl"
            >
              Premium AI-native production for brands that move fast and still demand artistic control.
            </motion.p>
          </div>

          <div className="relative min-h-[560px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.75 }}
              className="absolute left-2 top-0 h-64 w-[88%] overflow-hidden rounded-2xl border border-ink/10 shadow-paper"
            >
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=80"
                alt="Cinematic camera setup"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.75 }}
              className="absolute right-2 top-52 h-44 w-56 overflow-hidden rounded-2xl border border-ink/10 shadow-paper"
            >
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80"
                alt="Editing workspace"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.75 }}
              className="absolute left-8 top-[18.5rem] h-40 w-60 overflow-hidden rounded-2xl border border-ink/10 shadow-paper"
            >
              <img
                src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?auto=format&fit=crop&w=900&q=80"
                alt="On location shoot"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent" />
            </motion.div>

            {heroLabels.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + index * 0.08, duration: 0.7 }}
                className={`absolute ${item.className}`}
              >
                <Link href={item.href} className="pill-link text-sm md:text-base">
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <FloatingPaper className="absolute left-0 top-0 w-36 rotate-[-6deg]" delay={0.35}>
              <p className="text-lg font-bold tracking-[0.18em] text-cobalt">CAM</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-ink/60">Direction</p>
            </FloatingPaper>

            <FloatingPaper className="absolute right-2 top-28 w-36 rotate-[7deg]" delay={0.45}>
              <p className="text-lg font-bold tracking-[0.18em] text-cobalt">POST</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-ink/60">Post</p>
            </FloatingPaper>

            <FloatingPaper className="absolute left-10 top-64 w-36 rotate-[5deg]" delay={0.55}>
              <p className="text-lg font-bold tracking-[0.18em] text-cobalt">SHOT</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-ink/60">Shoot</p>
            </FloatingPaper>

            <FloatingPaper className="absolute right-4 top-[22rem] w-36 rotate-[-5deg]" delay={0.65}>
              <p className="text-lg font-bold tracking-[0.18em] text-cobalt">REEL</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-ink/60">Reels</p>
            </FloatingPaper>
          </div>
        </div>
      </div>
    </section>
  );
}
