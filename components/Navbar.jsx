import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Work", href: "/work" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const router = useRouter();

  return (
    <header className="sticky top-4 z-50 mx-auto w-[min(1280px,calc(100%-2rem))]">
      <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-white/75 px-4 py-3 shadow-paper backdrop-blur">
        <div className="paper-grain" />
        <div className="relative z-10 flex items-center justify-between gap-4">
          <Link href="/" className="font-display text-xl font-bold tracking-tight text-cobalt md:text-2xl">
            MR.DEZINER
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const active = router.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold ${
                    active ? "text-white" : "text-ink/80 hover:text-cobalt"
                  }`}
                >
                  {active ? (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-cobalt"
                      transition={{ type: "spring", stiffness: 360, damping: 30 }}
                    />
                  ) : null}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link href="/contact" className="pill-link text-xs md:text-sm">
            Start Project
          </Link>
        </div>
      </div>
    </header>
  );
}
