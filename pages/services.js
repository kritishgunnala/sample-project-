import Head from "next/head";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    id: "shoot",
    title: "Shoot",
    description:
      "Studio and on-location production with cinematic direction, lighting blueprints, and shot architecture.",
    href: "/contact",
    price: "From INR 30k",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "edit",
    title: "Edit",
    description:
      "Post-production tuned for platform-native pace, emotion arcs, and conversion-focused rhythm.",
    href: "/contact",
    price: "From INR 38k",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "deliver",
    title: "Deliver",
    description:
      "Quality-controlled exports with multi-format adaptation for paid, organic, and web placements.",
    href: "/contact",
    price: "From INR 46k",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "reels",
    title: "Reel Shoots",
    description:
      "Agile short-form units built for weekly drops with a strategic blend of trends and brand language.",
    href: "/contact",
    price: "From INR 34k",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80"
  }
];

const suggestions = {
  launch: {
    ideas: ["Founder-first reveal reel", "Countdown teaser arc", "Cinematic product macro series"],
    strategy: "Use a three-week launch runway with weekly trailer drops and day-zero hero cut.",
    production: "2-day shoot + 5 edit variants + platform-specific hooks"
  },
  social: {
    ideas: ["Story-led day-in-the-life reels", "Trend remix with product anchor", "Customer reaction montage"],
    strategy: "Publish in thematic clusters and optimize by hold-rate and save-rate.",
    production: "Rolling monthly shoot day + AI-assisted scripting cadence"
  },
  ads: {
    ideas: ["Pain-point montage", "Before/after proof loop", "UGC + cinematic hybrid"],
    strategy: "Produce three tonal ad families and iterate based on CTR and thumb-stop rate.",
    production: "One master shoot with ad-first shot list and retargeting cut-downs"
  }
};

export default function ServicesPage() {
  const [contentType, setContentType] = useState("launch");

  const recommendation = useMemo(() => suggestions[contentType], [contentType]);

  return (
    <>
      <Head>
        <title>Services - MR.DEZINER</title>
      </Head>

      <section className="section-shell pb-10">
        <p className="editorial-kicker">Services</p>
        <h1 className="mt-4 font-display text-6xl leading-[0.92] tracking-hero md:text-8xl">
          Shoot. Edit.
          <br />
          Deliver. Repeat.
        </h1>
        <p className="mt-6 max-w-[44ch] text-xl leading-relaxed text-ink/75">
          End-to-end creative production designed with editorial precision, cinematic quality, and AI-native speed.
        </p>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="paper-grid-surface relative overflow-hidden rounded-3xl border border-ink/10 shadow-paper">
            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80"
              alt="Studio production setup"
              className="h-[360px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/15 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm uppercase tracking-[0.18em] text-white/85">Studio Direction</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-white">Designed for cinematic brand presence.</p>
            </div>
          </div>
          <div className="paper-panel p-7">
            <p className="editorial-kicker">Visual Intent</p>
            <h2 className="mt-3 font-display text-4xl tracking-hero md:text-5xl">Premium imagery paired with tactical execution.</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75">
              Every service combines strong visual language and measurable delivery outputs.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <div id={service.id} key={service.id} className="scroll-mt-32">
              <ServiceCard {...service} index={index} />
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pt-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Starter", price: "INR 30k", note: "Single campaign reel package" },
            { name: "Growth", price: "INR 75k", note: "Monthly content sprint with strategy" },
            { name: "Flagship", price: "INR 2L+", note: "Full production and brand film system" }
          ].map((tier) => (
            <article key={tier.name} className="paper-panel p-7">
              <p className="editorial-kicker">{tier.name}</p>
              <h3 className="mt-4 font-display text-5xl tracking-hero">{tier.price}</h3>
              <p className="mt-3 text-base text-ink/75">{tier.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pt-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="paper-panel masking-tape relative overflow-hidden p-8 md:p-10"
        >
          <div className="paper-grain" />
          <div className="relative z-10">
            <p className="editorial-kicker">AI Creative Assistant</p>
            <h2 className="mt-3 font-display text-5xl tracking-hero md:text-6xl">What content are you planning?</h2>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                { key: "launch", label: "New Launch" },
                { key: "social", label: "Social Series" },
                { key: "ads", label: "Performance Ads" }
              ].map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setContentType(item.key)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    contentType === item.key
                      ? "bg-cobalt text-white shadow-depth"
                      : "border border-ink/15 bg-white/70 text-ink/70 hover:border-cobalt/30 hover:text-cobalt"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <article className="rounded-2xl border border-ink/10 bg-white/70 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cobalt">Reel Ideas</h3>
                <ul className="mt-3 space-y-2 text-sm text-ink/80">
                  {recommendation.ideas.map((idea) => (
                    <li key={idea}>- {idea}</li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border border-ink/10 bg-white/70 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cobalt">Content Strategy</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">{recommendation.strategy}</p>
              </article>

              <article className="rounded-2xl border border-ink/10 bg-white/70 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cobalt">Production Approach</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">{recommendation.production}</p>
              </article>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
