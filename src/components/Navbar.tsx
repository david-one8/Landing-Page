import { useEffect, useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import ScrollProgress from "@/components/ScrollProgress";
import logo from "@/assets/sere-logo.png";

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const t = content[lang];
  const links = [
    { href: "#how", label: t.nav.solution },
    { href: "#features", label: t.nav.features },
    { href: "#faq", label: lang === "en" ? "FAQ" : "सवाल" },
    { href: "#contact", label: t.nav.contact },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ScrollProgress />
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors ${
          scrolled ? "bg-white/95 backdrop-blur-sm border-b border-gray-100" : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 min-h-[48px]">
            <img
              src={logo}
              alt="Sere Innovations logo"
              width={36}
              height={36}
              className="w-9 h-9 object-contain"
            />
            <span
              className={`font-bold transition-colors ${scrolled ? "text-ink" : "text-white drop-shadow"}`}
            >
              Sere Innovations
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-sm transition-colors min-h-[48px] inline-flex items-center ${
                    scrolled
                      ? "text-muted hover:text-ink"
                      : "text-white/90 hover:text-white drop-shadow"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center bg-soil text-white rounded-lg px-4 py-2 text-sm font-semibold hover:opacity-95 min-h-[48px]"
            >
              {t.nav.cta}
            </a>
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className={`inline-flex items-center gap-1.5 text-sm font-medium rounded-lg px-3 py-1.5 transition min-h-[40px] ${
                scrolled
                  ? "border border-soil text-soil bg-transparent hover:bg-soil hover:text-white"
                  : "border border-white/70 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-soil"
              }`}
            >
              <Languages size={16} />
              {t.langToggle}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className={`text-xs font-medium rounded-lg px-2.5 py-1.5 transition min-h-[40px] ${
                scrolled
                  ? "border border-soil text-soil bg-transparent active:bg-soil active:text-white"
                  : "border border-white/70 text-white bg-white/10 backdrop-blur-sm"
              }`}
            >
              {t.langToggle}
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className={`p-3 -mr-3 min-h-[48px] min-w-[48px] flex items-center justify-center transition-colors ${
                scrolled ? "text-ink" : "text-white drop-shadow"
              }`}
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>

        {/* Mobile slide-in */}
        <div
          className={`md:hidden fixed inset-0 z-50 transition ${open ? "visible" : "invisible"}`}
          aria-hidden={!open}
        >
          <div
            onClick={() => setOpen(false)}
            className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          />
          <aside
            className={`absolute top-0 right-0 h-full w-[80%] max-w-xs bg-white shadow-xl p-6 transform transition-transform ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-bold text-ink">Menu</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-3 -mr-3 min-h-[48px] min-w-[48px] flex items-center justify-center"
              >
                <X size={24} />
              </button>
            </div>
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 px-2 min-h-[48px] text-base text-ink hover:bg-soil-pale rounded-lg"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-4">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block text-center bg-soil text-white rounded-lg px-4 py-3 font-semibold min-h-[48px]"
                >
                  {t.nav.cta}
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </header>
    </>
  );
}
