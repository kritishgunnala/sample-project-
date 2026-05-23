import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

const projectTypes = ["Brand Film", "Social Reels", "Product Ads", "Event Coverage"];
const goals = ["Reach", "Conversions", "Launch", "Brand Positioning"];
const timelines = ["1 week", "2-3 weeks", "1 month", "2+ months"];
const budgets = ["INR 30k-75k", "INR 75k-1.5L", "INR 1.5L-3L", "INR 3L+"];

export default function ContactPage() {
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [goal, setGoal] = useState(goals[0]);
  const [timeline, setTimeline] = useState(timelines[1]);
  const [budget, setBudget] = useState(budgets[1]);
  const [brief, setBrief] = useState("We are launching a new line and need cinematic reels + one hero film.");

  const estimate = useMemo(() => {
    const score =
      (projectTypes.indexOf(projectType) + 1) * 10 +
      (goals.indexOf(goal) + 1) * 8 +
      (timelines.indexOf(timeline) + 1) * 6 +
      (budgets.indexOf(budget) + 1) * 12;

    if (score < 45) return "Estimated: INR 45k to INR 85k / 10-14 days";
    if (score < 70) return "Estimated: INR 85k to INR 1.8L / 2-4 weeks";
    return "Estimated: INR 1.8L+ / 4+ weeks with full production unit";
  }, [projectType, goal, timeline, budget]);

  return (
    <>
      <Head>
        <title>Contact - MR.DEZINER</title>
      </Head>

      <section className="section-shell pb-10">
        <p className="editorial-kicker">AI Onboarding</p>
        <h1 className="mt-4 font-display text-6xl leading-[0.92] tracking-hero md:text-8xl">Tell Us About Your Project</h1>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="paper-panel masking-tape p-8 md:p-10">
            <div className="space-y-7">
              <div>
                <label className="text-sm font-semibold uppercase tracking-[0.16em] text-cobalt">Project Type</label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {projectTypes.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setProjectType(item)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold ${
                        projectType === item
                          ? "bg-cobalt text-white"
                          : "border border-ink/15 bg-white/70 text-ink/80 hover:border-cobalt/40"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold uppercase tracking-[0.16em] text-cobalt">Primary Goal</label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {goals.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setGoal(item)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold ${
                        goal === item
                          ? "bg-cobalt text-white"
                          : "border border-ink/15 bg-white/70 text-ink/80 hover:border-cobalt/40"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold uppercase tracking-[0.16em] text-cobalt">Timeline</label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="mt-3 w-full rounded-xl border border-ink/15 bg-white/85 px-4 py-3 text-sm"
                  >
                    {timelines.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold uppercase tracking-[0.16em] text-cobalt">Budget</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="mt-3 w-full rounded-xl border border-ink/15 bg-white/85 px-4 py-3 text-sm"
                  >
                    {budgets.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold uppercase tracking-[0.16em] text-cobalt">Project Brief</label>
                <textarea
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  rows={5}
                  className="mt-3 w-full rounded-2xl border border-ink/15 bg-white/85 px-4 py-3 text-sm leading-relaxed"
                />
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="paper-grid-surface relative overflow-hidden rounded-3xl border border-ink/10 shadow-paper">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Creative team planning"
                className="h-[210px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-sm uppercase tracking-[0.16em] text-white/85">Fast, guided onboarding</p>
            </div>

            <div className="paper-panel p-7">
              <p className="editorial-kicker">Smart Estimator</p>
              <h2 className="mt-3 font-display text-4xl tracking-hero">{estimate}</h2>
              <p className="mt-4 text-sm text-ink/75">
                Based on your current inputs, we suggest a hybrid shoot + edit sprint with iterative review loops.
              </p>
            </div>

            <div className="paper-panel p-7">
              <p className="editorial-kicker">Next Step</p>
              <h3 className="mt-3 font-display text-3xl tracking-hero">Book Calendar</h3>
              <p className="mt-3 text-sm text-ink/75">Pick a discovery slot and we will send a tailored blueprint before the call.</p>
              <button type="button" className="pill-link mt-5">
                Open Booking Calendar
              </button>
            </div>

            <div className="paper-panel p-7">
              <p className="editorial-kicker">Fast Lane</p>
              <h3 className="mt-3 font-display text-3xl tracking-hero">WhatsApp Handoff</h3>
              <p className="mt-3 text-sm text-ink/75">Share references, timeline, and brand files directly.</p>
              <Link href="https://wa.me/919999999999" className="pill-link mt-5 inline-flex" target="_blank">
                Continue on WhatsApp
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
