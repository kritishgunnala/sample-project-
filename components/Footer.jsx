import Link from "next/link";

const links = [
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Work", href: "/work" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" }
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 pb-12 pt-10">
      <div className="section-shell py-0">
        <div className="paper-panel relative overflow-hidden p-8">
          <div className="paper-grain" />
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="editorial-kicker">Premium Creative Production</p>
              <h3 className="mt-3 font-display text-3xl tracking-hero md:text-4xl">#growwithmrdeziner</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink/80 hover:border-cobalt/40 hover:text-cobalt"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
