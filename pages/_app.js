import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NoiseTexture from "../components/NoiseTexture";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.09,
      wheelMultiplier: 0.92,
      gestureOrientation: "vertical"
    });

    lenisRef.current = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const handleRouteDone = () => {
      lenis.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeComplete", handleRouteDone);

    return () => {
      router.events.off("routeChangeComplete", handleRouteDone);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [router.events]);

  return (
    <>
      <NoiseTexture />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          className="site-paper"
          key={router.asPath}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
