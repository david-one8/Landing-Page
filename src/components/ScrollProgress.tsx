import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollPercent(total > 0 ? (scrolled / total) * 100 : 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[60] h-[3px] bg-soil transition-[width] duration-100 ease-out"
      style={{ width: `${scrollPercent}%` }}
      aria-hidden="true"
    />
  );
}
