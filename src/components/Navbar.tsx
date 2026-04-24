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

  useEffect(() => {
    if (!open) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

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
      </header>
      {/* Mobile navigation layer */}
      <div
        className={`md:hidden fixed inset-0 z-[80] transition ${
          open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-ink/45 backdrop-blur-sm"
        />
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute inset-0 flex h-full w-full flex-col bg-white shadow-2xl transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex min-h-16 items-center justify-between border-b border-gray-100 px-5">
            <span className="text-xl font-bold text-ink">Menu</span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded-full text-ink transition-colors hover:bg-soil-pale"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-1 flex-col justify-between px-6 pb-8 pt-8">
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[56px] items-center rounded-2xl border border-transparent px-4 text-lg font-semibold text-ink transition-colors hover:border-soil/10 hover:bg-soil-pale"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="space-y-4 border-t border-gray-100 pt-6">
              <button
                onClick={() => {
                  toggleLang();
                  setOpen(false);
                }}
                className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-2xl border border-soil/20 bg-soil-pale px-4 text-sm font-semibold text-soil"
              >
                <Languages size={18} />
                {lang === "en" ? "Switch to Hindi" : "Switch to English"}
              </button>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex min-h-[56px] w-full items-center justify-center rounded-2xl bg-soil px-4 text-center text-lg font-semibold text-white shadow-lg shadow-soil/20"
              >
                {t.nav.cta}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
