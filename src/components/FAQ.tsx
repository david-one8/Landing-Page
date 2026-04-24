import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/content";

export default function FAQ() {
  const { lang } = useLanguage();
  const t = content[lang].faq;
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="section-faq-heading" className="bg-warm py-20 md:py-28 px-4">
      <div className="max-w-2xl mx-auto">
        <h2
          id="section-faq-heading"
          className="text-2xl md:text-3xl font-bold text-ink text-center"
        >
          {t.headline}
        </h2>
        <div className="w-12 h-1 bg-gold rounded-full mx-auto mt-3 mb-10" />
        <div>
          {t.items.map((item, i) => {
            const isOpen = activeIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                  className="flex justify-between items-center w-full text-left py-5 border-b border-gray-200 min-h-[48px] gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-soil focus-visible:ring-offset-2 rounded"
                >
                  <span className="font-semibold text-ink text-base md:text-lg">{item.q}</span>
                  <ChevronDown
                    size={22}
                    className={`shrink-0 transition-transform duration-300 text-soil ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-muted pb-5 leading-relaxed">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
