import { Sprout } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import trustHands from "@/assets/trust-hands.jpg";

export default function Trust() {
  const { lang } = useLanguage();
  const t = content[lang].trust;
  return (
    <section className="relative overflow-hidden py-20 md:py-28 px-4">
      <div className="absolute inset-0 z-0">
        <img
          src={trustHands}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center blur-[1px]"
        />
        <div className="absolute inset-0 bg-warm/82" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-ink text-center">
          {t.headlinePrefix}{" "}
          <span className="handdrawn-underline text-soil">{t.headlineHighlight}</span>{" "}
          {t.headlineSuffix}
        </h2>
        <div className="w-12 h-1 bg-gold rounded-full mx-auto mt-5 mb-10" />
        {t.statements.map((s) => (
          <div
            key={s}
            className="group flex gap-4 items-start mb-4 bg-white/75 backdrop-blur-sm rounded-xl p-5 border border-white/60 shadow-sm hover:bg-white/85 transition-colors"
          >
            <Sprout className="text-soil flex-shrink-0 mt-0.5" size={20} />
            <p className="text-base text-ink font-medium leading-relaxed">{s}</p>
          </div>
        ))}
        <div className="text-center mt-8">
          <p className="text-soil font-semibold text-sm italic bg-white/60 inline-block px-5 py-2 rounded-full">
            {t.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
