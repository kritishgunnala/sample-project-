import Head from "next/head";
import PortfolioCard from "../components/PortfolioCard";

const items = [
  {
    title: "Momentum Commercial",
    category: "Commercials",
    description: "High-energy product narrative with tactile closeups and fast-cut social derivatives.",
    tall: true,
    image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "House of Form",
    category: "Brand Films",
    description: "A mood-rich identity film focused on craft, materials, and visual world-building.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "Always-On Reels",
    category: "Social Media",
    description: "Weekly reel infrastructure for retention, saves, and audience rhythm.",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "Conversion Frames",
    category: "Product Ads",
    description: "Performance-led ad system with cinematic hook timing and scroll-stop openers.",
    image: "https://images.unsplash.com/photo-1606851091851-e8c8c0fca5f4?auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "Live Atmosphere",
    category: "Event Coverage",
    description: "Immersive event capture with editorial cutdown sets for rapid post-event publishing.",
    tall: true,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Texture Stories",
    category: "Fashion",
    description: "Stylized lookbooks with tactile palette direction and modular campaign edits.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1400&q=80"
  }
];

export default function WorkPage() {
  return (
    <>
      <Head>
        <title>Work - MR.DEZINER</title>
      </Head>

      <section className="section-shell pb-10">
        <p className="editorial-kicker">Portfolio</p>
        <h1 className="mt-4 font-display text-6xl leading-[0.92] tracking-hero md:text-8xl">Cinematic Work Archive</h1>
        <p className="mt-6 max-w-[48ch] text-xl leading-relaxed text-ink/75">
          A bento editorial grid of commercials, films, social programs, product ads, event stories, and fashion films.
        </p>
      </section>

      <section className="section-shell pt-0">
        <div className="paper-grid-surface relative overflow-hidden rounded-3xl border border-ink/10 shadow-paper">
          <img
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1800&q=80"
            alt="Cinematic production stage"
            className="h-[360px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-sm uppercase tracking-[0.18em] text-white/80">Featured Production</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-white">Immersive storytelling with editorial depth.</p>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="grid auto-rows-fr gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <PortfolioCard {...items[0]} />
          </div>
          <div className="space-y-6 md:col-span-5">
            <PortfolioCard {...items[1]} />
            <PortfolioCard {...items[2]} />
          </div>

          <div className="md:col-span-5">
            <PortfolioCard {...items[3]} />
          </div>
          <div className="md:col-span-7">
            <PortfolioCard {...items[4]} />
          </div>

          <div className="md:col-span-6">
            <PortfolioCard {...items[5]} />
          </div>
          <div className="paper-panel relative overflow-hidden p-7 md:col-span-6">
            <div className="paper-grain" />
            <div className="relative z-10">
              <p className="editorial-kicker">Category Filters</p>
              <h3 className="mt-3 font-display text-5xl tracking-hero">Commercials | Films | Reels | Ads</h3>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                Each card supports hover depth, cinematic overlays, and modular case-story expansion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
