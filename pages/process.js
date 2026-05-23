import Head from "next/head";
import { motion } from "framer-motion";

const steps = [
  "Discovery",
  "Planning",
  "Production",
  "Post Production",
  "Quality Review",
  "Delivery"
];

export default function ProcessPage() {
  return (
    <>
      <Head>
        <title>Process - MR.DEZINER</title>
      </Head>

      <section className="section-shell pb-10">
        <p className="editorial-kicker">Workflow</p>
        <h1 className="mt-4 font-display text-6xl leading-[0.92] tracking-hero md:text-8xl">Precision In Motion</h1>
        <p className="mt-6 max-w-[44ch] text-xl leading-relaxed text-ink/75">
          A transparent editorial timeline that keeps quality high and feedback friction low.
        </p>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="paper-grid-surface relative overflow-hidden rounded-3xl border border-ink/10 shadow-paper">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80"
              alt="Creative process board"
              className="h-[340px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm uppercase tracking-[0.18em] text-white/80">Workflow Clarity</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-white">From discovery to delivery with visible checkpoints.</p>
            </div>
          </div>
          <div className="paper-panel p-7">
            <p className="editorial-kicker">Execution Logic</p>
            <p className="mt-3 text-lg leading-relaxed text-ink/75">
              We run a cinematic production engine with stage gates, feedback loops, and quality review before publishing.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell pt-2">
        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="paper-panel p-7">
              <p className="editorial-kicker">Flow</p>
              <h2 className="mt-3 font-display text-5xl tracking-hero">
                Idea {"->"} Shoot {"->"} Edit {"->"} Publish
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/75">
                Every stage has clear outputs, visual checkpoints, and timeline accountability.
              </p>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                className="mt-8 h-1 origin-left rounded-full bg-cobalt"
              />
            </div>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.article
                key={step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.65, delay: index * 0.06 }}
                className="paper-panel p-7"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cobalt">Step {index + 1}</p>
                <h3 className="mt-2 font-display text-5xl tracking-hero">{step}</h3>
                <p className="mt-3 max-w-[46ch] text-lg leading-relaxed text-ink/75">
                  Structured collaboration with cinematic intent, purposeful pacing, and decision-ready outputs.
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
