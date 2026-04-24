import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import ctaField from "@/assets/cta-field.jpg";

const states = [
  "Andhra Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

export default function CTAForm() {
  const { lang } = useLanguage();
  const t = content[lang].cta;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!showToast) return;
    const id = setTimeout(() => setShowToast(false), 5000);
    return () => clearTimeout(id);
  }, [showToast]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError(t.validationError);
      return;
    }
    setError("");
    setSubmitted(true);
    setShowToast(true);
  };

  return (
    <section id="contact" className="relative text-white py-20 md:py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={ctaField}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-soil/92 via-soil/85 to-soil/92" />
      </div>
      {/* corner sprout */}
      <div
        aria-hidden
        className="absolute bottom-6 left-6 text-white/15 animate-sway hidden md:block"
      >
        <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c-3 4-6 7-6 11a6 6 0 0012 0c0-4-3-7-6-11z" />
        </svg>
      </div>
      <div
        aria-hidden
        className="absolute top-10 right-8 text-white/10 animate-float-slow hidden md:block"
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>

      <div className="relative max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">{t.headline}</h2>
        <div className="w-12 h-1 bg-gold rounded-full mx-auto mt-3" />
        <p className="mt-3 text-base text-green-100 max-w-xl mx-auto">{t.sub}</p>

        {submitted ? (
          <div className="mt-10 max-w-md mx-auto bg-white/15 backdrop-blur-md border border-white/25 rounded-3xl p-8 shadow-2xl">
            <CheckCircle2 className="text-white w-16 h-16 mx-auto" strokeWidth={1.8} />
            <h3 className="mt-4 text-2xl font-bold">{t.successTitle}</h3>
            <p className="text-white/85 mt-2 leading-relaxed">{t.successSub}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-10 space-y-4 text-left bg-white/12 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl"
            noValidate
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.namePlaceholder}
              className="w-full bg-white/20 border border-white/45 rounded-xl px-4 py-3.5 text-white text-base placeholder:text-white/55 focus:outline-none focus:bg-white/30 focus:border-white/75 focus:ring-2 focus:ring-white/20 transition-all duration-200"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t.phonePlaceholder}
              className="w-full bg-white/20 border border-white/45 rounded-xl px-4 py-3.5 text-white text-base placeholder:text-white/55 focus:outline-none focus:bg-white/30 focus:border-white/75 focus:ring-2 focus:ring-white/20 transition-all duration-200"
            />
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full bg-white/20 border border-white/45 rounded-xl px-4 py-3.5 text-white text-base focus:outline-none focus:bg-white/30 focus:border-white/75 focus:ring-2 focus:ring-white/20 transition-all duration-200"
            >
              <option value="" disabled className="text-ink">
                {t.statePlaceholder}
              </option>
              {states.map((s) => (
                <option key={s} value={s} className="text-ink">
                  {s}
                </option>
              ))}
            </select>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.messagePlaceholder}
              className="w-full bg-white/20 border border-white/45 rounded-xl px-4 py-3.5 text-white text-base placeholder:text-white/55 focus:outline-none focus:bg-white/30 focus:border-white/75 focus:ring-2 focus:ring-white/20 transition-all duration-200"
            />
            {error && (
              <p className="text-sm bg-white/15 border border-white/30 rounded-lg px-3 py-2 text-white">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-white text-soil font-bold text-base py-4 rounded-xl mt-3 cursor-pointer hover:bg-soil-light transition-all duration-200 shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            >
              {t.submitBtn}
            </button>
            <p className="text-white/55 text-xs text-center mt-3 italic">{t.note}</p>
          </form>
        )}
      </div>

      {/* Toast */}
      <div
        className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
          showToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        role="status"
        aria-live="polite"
      >
        <div className="bg-soil text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 border border-white/20">
          <CheckCircle2 size={20} />
          <span className="text-sm font-medium">{t.toast}</span>
        </div>
      </div>
    </section>
  );
}
