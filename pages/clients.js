import Head from "next/head";
import TestimonialCard from "../components/TestimonialCard";

const metrics = [
  { value: "120M+", label: "Views" },
  { value: "500+", label: "Reels Delivered" },
  { value: "98%", label: "Client Retention" }
];

export default function ClientsPage() {
  return (
    <>
      <Head>
        <title>Clients - MR.DEZINER</title>
      </Head>

      <section className="section-shell pb-10">
        <p className="editorial-kicker">Social Proof</p>
        <h1 className="mt-4 font-display text-6xl leading-[0.92] tracking-hero md:text-8xl">Trusted By Ambitious Brands</h1>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="paper-grid-surface relative overflow-hidden rounded-3xl border border-ink/10 shadow-paper">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
              alt="Client collaboration meeting"
              className="h-[320px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm uppercase tracking-[0.18em] text-white/80">Partnership Quality</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-white">Creative partnerships built for long-term growth.</p>
            </div>
          </div>
          <div className="paper-panel p-7">
            <p className="editorial-kicker">Trust Layer</p>
            <p className="mt-3 text-lg leading-relaxed text-ink/75">
              We combine premium visual output with process reliability, making campaign delivery predictable and scalable.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-6 md:grid-cols-3">
          {metrics.map((metric) => (
            <article key={metric.label} className="paper-panel p-7">
              <p className="font-display text-6xl tracking-hero text-ink md:text-7xl">{metric.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-ink/65">{metric.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pt-8">
        <div className="paper-panel overflow-hidden py-4">
          <div className="flex animate-marquee whitespace-nowrap text-2xl font-semibold tracking-[0.16em] text-cobalt">
            <span className="mr-14">NIKE</span>
            <span className="mr-14">H&M</span>
            <span className="mr-14">AJIO</span>
            <span className="mr-14">SWIGGY</span>
            <span className="mr-14">BOAT</span>
            <span className="mr-14">AIRTEL</span>
            <span className="mr-14">ZARA</span>
            <span className="mr-14">NIKE</span>
            <span className="mr-14">H&M</span>
            <span className="mr-14">AJIO</span>
            <span className="mr-14">SWIGGY</span>
            <span className="mr-14">BOAT</span>
          </div>
        </div>
      </section>

      <section className="section-shell pt-8">
        <div className="grid gap-6 md:grid-cols-2">
          <TestimonialCard
            quote="The visual quality and strategic pacing changed how our audience experiences our brand."
            author="CMO"
            role="Fashion Commerce"
          />
          <TestimonialCard
            quote="Their workflow is sharp, collaborative, and significantly faster than our previous vendors."
            author="Founder"
            role="D2C Nutrition"
          />
        </div>
      </section>

      <section className="section-shell pt-8">
        <div className="paper-panel p-8 md:p-10">
          <p className="editorial-kicker">Case Study Snippets</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-ink/10 bg-white/70 p-5">
              <h3 className="font-display text-3xl tracking-hero">Fashion Launch</h3>
              <p className="mt-2 text-sm text-ink/75">4.2x reach growth in 28 days using cinematic reel clusters.</p>
            </article>
            <article className="rounded-2xl border border-ink/10 bg-white/70 p-5">
              <h3 className="font-display text-3xl tracking-hero">Food Brand</h3>
              <p className="mt-2 text-sm text-ink/75">3.6x engagement lift with texture-led product storytelling.</p>
            </article>
            <article className="rounded-2xl border border-ink/10 bg-white/70 p-5">
              <h3 className="font-display text-3xl tracking-hero">SaaS Launch</h3>
              <p className="mt-2 text-sm text-ink/75">2.9x conversion uplift after creative pacing and message overhaul.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
