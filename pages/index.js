import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import PortfolioCard from "../components/PortfolioCard";
import TestimonialCard from "../components/TestimonialCard";
import CTASection from "../components/CTASection";

const servicesPreview = [
  {
    title: "Shoot",
    description: "Studio and on-location production setups with cinematic composition and deliberate pacing.",
    href: "/services#shoot",
    price: "From INR 30k",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Edit",
    description: "Post-production systems for short-form, launch films, and performance-driven creative loops.",
    href: "/services#edit",
    price: "From INR 38k",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Deliver",
    description: "High-quality exports, channel adaptation, and publishing support with creative QA layers.",
    href: "/services#deliver",
    price: "From INR 46k",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>MR.DEZINER - Cinematic Creative Studio</title>
      </Head>

      <HeroSection />

      <section className="section-shell pt-0">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="editorial-kicker">Services Preview</p>
            <h2 className="mt-3 font-display text-5xl tracking-hero md:text-6xl">Built For Brand Momentum</h2>
          </div>
          <Link href="/services" className="pill-link hidden md:inline-flex">
            See All Services
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {servicesPreview.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </section>

      <section className="section-shell pt-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="editorial-kicker">Featured Work</p>
            <h2 className="mt-3 font-display text-5xl tracking-hero md:text-6xl">Editorial Bento Showcase</h2>
          </div>
          <Link href="/work" className="pill-link hidden md:inline-flex">
            View Portfolio
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <PortfolioCard
              title="Pulse Campaign"
              category="Commercials"
              description="A fast-cut product campaign balancing texture, contrast, and social-first retention beats."
              tall
              image="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&w=1400&q=80"
            />
          </div>
          <div className="space-y-6 md:col-span-5">
            <PortfolioCard
              title="Origin Story"
              category="Brand Films"
              description="Narrative-led launch film with premium pacing and layered voice direction."
              image="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80"
            />
            <PortfolioCard
              title="Reel Engine"
              category="Social Media"
              description="Continuous reel pipeline designed around trend windows and conversion moments."
              image="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=80"
            />
          </div>
        </div>
      </section>

      <section className="section-shell pt-8">
        <div className="grid gap-6 md:grid-cols-2">
          <TestimonialCard
            quote="They made our launch feel like a world-class editorial campaign."
            author="Growth Lead"
            role="D2C Beauty"
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="paper-panel masking-tape relative overflow-hidden p-8"
          >
            <div className="paper-grain" />
            <div className="relative z-10">
              <p className="editorial-kicker">Proof</p>
              <h3 className="mt-3 font-display text-5xl tracking-hero">120M+ Views</h3>
              <p className="mt-4 text-lg text-ink/75">
                500+ reels delivered with a 98% retention rate for recurring partnerships.
              </p>
              <Link href="/clients" className="pill-link mt-8 inline-flex">
                Client Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
