import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import benefitsField from "@/assets/benefits-field.jpg";

export default function Benefits() {
  const { lang } = useLanguage();
  const t = content[lang].benefits;
  return (
    <section className="relative overflow-hidden py-20 md:py-28 px-4">
      <div className="absolute inset-0 z-0">
        <img
          src={benefitsField}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm/95 to-soil-light/90" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-ink text-center">{t.headline}</h2>
        <div className="w-12 h-1 bg-gold rounded-full mx-auto mt-3" />
        <p className="text-base text-muted text-center max-w-xl mx-auto mt-3 mb-10">{t.sub}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-4">
          <div>
            <h3 className="text-3xl font-bold text-ink leading-snug max-w-xs">{t.statement}</h3>
            <div className="w-12 h-1 bg-gold mt-4 rounded-full" />
          </div>
          <div>
            {t.items.map((b) => (
              <div
                key={b.title}
                className="flex gap-4 items-start py-5 border-b border-soil/10 last:border-b-0"
              >
                <ArrowRight className="text-soil flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-semibold text-ink">{b.title}</h4>
                  <p className="text-sm text-muted mt-1">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
