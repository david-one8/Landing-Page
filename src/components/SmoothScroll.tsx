import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      duration: 1.1,
      lerp: 0.09,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
