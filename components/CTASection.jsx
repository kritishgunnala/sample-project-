import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function CTASection() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return undefined;

    const onMove = (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      gsap.to(button, { x: x * 0.18, y: y * 0.18, duration: 0.35, ease: "power3.out" });
    };

    const onLeave = () => {
      gsap.to(button, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.45)" });
    };

    button.addEventListener("mousemove", onMove);
    button.addEventListener("mouseleave", onLeave);

    return () => {
      button.removeEventListener("mousemove", onMove);
      button.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="section-shell pt-10">
      <div className="masking-tape paper-panel relative overflow-hidden p-8 md:p-12">
        <div className="paper-grain" />
        <div className="relative z-10 grid gap-8 md:grid-cols-[1.2fr_auto] md:items-end">
          <div>
            <p className="editorial-kicker">Ready To Roll</p>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-hero md:text-7xl">
              Let us build your next unforgettable campaign.
            </h2>
            <p className="mt-5 max-w-[42ch] text-lg text-ink/70">
              AI-assisted planning, cinematic production, and editorial finishing in one continuous system.
            </p>
          </div>

          <Link href="/contact" className="inline-block">
            <span
              ref={buttonRef}
              className="inline-flex min-w-56 items-center justify-center rounded-full bg-cobalt px-8 py-4 text-lg font-semibold text-white shadow-depth"
            >
              Book Discovery
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
