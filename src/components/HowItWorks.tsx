import { ChevronRight, ChevronDown, Egg, Settings, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import solutionFarmer from "@/assets/solution-farmer.jpg";

const stepIcons = [Egg, Settings, Sparkles];

export default function HowItWorks() {
  const { lang } = useLanguage();
  const t = content[lang].howItWorks;
  const steps = t.steps;
  return (
    <section id="how" className="relative overflow-hidden py-20 md:py-28 px-4">
      <div className="absolute inset-0 z-0">
        <img
          src={solutionFarmer}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-soil/90 via-soil/80 to-soil/90" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center">{t.headline}</h2>
        <div className="w-12 h-1 bg-gold rounded-full mx-auto mt-3" />
        <p className="mt-3 text-base text-green-100 text-center max-w-xl mx-auto mb-10">{t.para}</p>

        <div className="mt-4 flex flex-col md:flex-row items-stretch gap-4">
          {steps.map((step, i) => {
            const Icon = stepIcons[i] ?? Egg;
            return (
              <div key={step.title} className="contents md:flex md:items-center md:flex-1">
                <div className="group relative overflow-hidden rounded-2xl bg-white/20 backdrop-blur-md p-7 flex-1 border border-white/30 hover:border-white/50 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <span
                    aria-hidden
                    className="absolute top-2 right-3 text-8xl font-black text-white/10 leading-none select-none pointer-events-none"
                  >
                    {i + 1}
                  </span>
                  <div className="relative w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4 text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="relative font-semibold text-white text-lg">{step.title}</h3>
                  <p className="relative mt-2 text-sm text-green-100">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <>
                    <ChevronRight
                      className="hidden md:block text-green-300 opacity-80 mx-2 shrink-0 animate-soft-pulse"
                      size={32}
                    />
                    <ChevronDown className="md:hidden text-green-300 mx-auto" size={24} />
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div className="relative mt-16 py-12 md:py-16 px-6 rounded-3xl overflow-hidden bg-white/10 border border-white/20 backdrop-blur-sm text-center">
          <span
            aria-hidden
            className="absolute top-2 left-6 md:left-10 text-7xl md:text-8xl font-black text-gold/70 leading-none select-none pointer-events-none"
          >
            “
          </span>
          <p className="relative text-2xl md:text-3xl font-bold italic text-white max-w-3xl mx-auto leading-snug">
            {t.closing}
          </p>
          <div className="w-12 h-1 bg-gold rounded-full mx-auto mt-6" />
          <p className="relative mt-4 text-sm uppercase tracking-widest text-green-200 font-semibold">
            Sere Innovations
          </p>
        </div>
      </div>
    </section>
  );
}
