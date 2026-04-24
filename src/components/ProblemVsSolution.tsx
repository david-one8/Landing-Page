import { X, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import problemFarmer from "@/assets/problem-farmer.jpg";

export default function ProblemVsSolution() {
  const { lang } = useLanguage();
  const t = content[lang].problemVsSolution;
  return (
    <section className="relative overflow-hidden py-20 md:py-28 px-4">
      <div className="absolute inset-0 z-0">
        <img
          src={problemFarmer}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center grayscale backdrop-blur-[2px]"
        />
        <div className="absolute inset-0 bg-ink/70" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center">{t.headline}</h2>
        <div className="w-12 h-1 bg-gold rounded-full mx-auto mt-3" />
        <p className="text-base text-gray-300 text-center max-w-xl mx-auto mt-3 mb-10">{t.sub}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group bg-black/50 backdrop-blur-sm border border-red-500/40 rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-bold text-red-300 mb-6">❌ {t.withoutTitle}</h3>
            <ul className="space-y-4">
              {t.without.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 transition-transform group-hover:translate-x-0.5"
                >
                  <span className="mt-1 shrink-0 p-1 rounded-full bg-red-500/20">
                    <X size={14} className="text-red-400" />
                  </span>
                  <span className="text-red-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="group bg-soil/50 backdrop-blur-sm border border-green-400/40 rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-soil/20 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl"
            />
            <h3 className="text-xl font-bold text-green-300 mb-6">✅ {t.withTitle}</h3>
            <ul className="space-y-4">
              {t.with.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 transition-transform group-hover:translate-x-0.5"
                >
                  <span className="mt-1 shrink-0 p-1 rounded-full bg-green-400/20">
                    <Check size={14} className="text-green-400" strokeWidth={3} />
                  </span>
                  <span className="text-green-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
