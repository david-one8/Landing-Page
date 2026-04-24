import { CheckSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/content";

export default function WhoItsFor() {
  const { lang } = useLanguage();
  const t = content[lang].whoItsFor;
  return (
    <section id="who" className="relative bg-soil-light py-20 md:py-28 px-4 overflow-hidden">
      <div aria-hidden className="absolute top-12 left-8 text-soil/10 select-none animate-sway">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c-3 4-6 7-6 11a6 6 0 0012 0c0-4-3-7-6-11z" />
        </svg>
      </div>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-ink text-center">{t.headline}</h2>
        <div className="w-12 h-1 bg-gold rounded-full mx-auto mt-3 mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {t.items.map((item) => (
            <div
              key={item}
              className="flex gap-3 items-start bg-white rounded-xl p-4 shadow-sm border border-soil/10 hover:shadow-md hover:border-soil/30 transition-all"
            >
              <CheckSquare className="text-soil flex-shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-ink font-medium leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-lg font-bold text-soil bg-white rounded-xl px-8 py-4 shadow-sm max-w-md mx-auto">
            {t.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
