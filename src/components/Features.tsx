import { Thermometer, Droplets, RotateCcw, User, IndianRupee, Eye } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/content";

const icons = [Thermometer, Droplets, RotateCcw, User, IndianRupee, Eye];

export default function Features() {
  const { lang } = useLanguage();
  const t = content[lang].features;
  return (
    <section id="features" className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-ink text-center">{t.headline}</h2>
        <div className="w-12 h-1 bg-gold rounded-full mx-auto mt-3" />
        <p className="text-base text-muted text-center max-w-xl mx-auto mt-3 mb-10">{t.sub}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.map(({ title, desc }, i) => {
            const Icon = icons[i] ?? Thermometer;
            return (
              <div
                key={title}
                className="bg-soil-light rounded-2xl p-6 border border-soil/15 hover:shadow-md hover:border-soil/30 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-soil/15 flex items-center justify-center mb-4">
                  <Icon className="text-soil w-5 h-5" />
                </div>
                <h3 className="font-semibold text-ink text-base mb-1">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
