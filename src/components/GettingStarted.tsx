import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/content";

export default function GettingStarted() {
  const { lang } = useLanguage();
  const t = content[lang].gettingStarted;
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="getting-started"
      aria-labelledby="section-getting-started-heading"
      className="bg-white py-20 md:py-28 px-4"
    >
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2
          id="section-getting-started-heading"
          className="text-2xl md:text-3xl font-bold text-ink"
        >
          {t.headline}
        </h2>
        <div className="w-12 h-1 bg-gold rounded-full mx-auto mt-3" />
        <p className="text-base text-muted text-center max-w-xl mx-auto mt-3">{t.sub}</p>
      </div>

      <div className="max-w-2xl mx-auto relative">
        <div className="absolute left-7 top-2 bottom-2 w-0.5 bg-soil/20" />
        {t.steps.map((step, i) => {
          const isLast = i === t.steps.length - 1;
          return (
            <div
              key={step.number}
              className={`flex gap-5 md:gap-6 items-start mb-10 last:mb-0 relative transition-all duration-700 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: visible ? `${i * 150}ms` : "0ms" }}
            >
              <div
                className={`w-14 h-14 rounded-full border-2 flex items-center justify-center flex-shrink-0 font-black text-lg transition-colors duration-500 relative z-10 ${
                  isLast
                    ? "bg-soil border-soil text-white ring-4 ring-soil/30 ring-offset-2 scale-110 shadow-xl"
                    : visible
                      ? "bg-soil border-soil text-white"
                      : "bg-soil-light border-soil/30 text-soil"
                }`}
                style={{ transitionDelay: visible ? `${i * 150 + 200}ms` : "0ms" }}
              >
                {step.number}
              </div>
              <div className="pt-2">
                <h3 className={`font-bold ${isLast ? "text-soil text-xl" : "text-ink text-lg"}`}>
                  {step.title}
                </h3>
                <p className="text-muted mt-1 leading-relaxed text-sm md:text-base">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
