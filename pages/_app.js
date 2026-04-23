import "../styles/globals.css";
import { useEffect } from "react";
import CustomCursor from "../components/CustomCursor";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    let lenis;
    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    });
    return () => lenis?.destroy();
  }, []);

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </>
  );
}