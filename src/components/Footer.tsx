import { Sprout, Mail, Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();
  const quickLinks = [
    { href: "#problem", hi: "समस्या", en: "The Problem" },
    { href: "#features", hi: "विशेषताएं", en: "Features" },
    { href: "#calculator", hi: "बचत कैलकुलेटर", en: "Savings Calculator" },
    { href: "#faq", hi: "आम सवाल", en: "FAQ" },
    { href: "#contact", hi: "पूछताछ करें", en: "Enquire Now" },
  ];

  return (
    <footer className="bg-ink text-gray-400 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Sprout className="w-6 h-6 text-soil" />
              <p className="text-white font-bold text-lg">Sere Innovations</p>
            </div>
            <p className="text-sm mt-3 leading-relaxed text-gray-400">
              {lang === "hi"
                ? "किसानों को अपना भविष्य सेने में मदद करना"
                : "Helping farmers hatch their own future"}
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              {lang === "hi" ? "संपर्क" : "Contact"}
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:contact@sereinnovations.in"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-soil flex-shrink-0" />
                  contact@sereinnovations.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-soil flex-shrink-0" />
                +91 00000 00000
              </li>
              <li>
                <a
                  href="https://wa.me/910000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  {lang === "hi" ? "WhatsApp पर बात करें" : "Chat on WhatsApp"}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              {lang === "hi" ? "पेज लिंक" : "Quick Links"}
            </p>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {lang === "hi" ? link.hi : link.en}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>
            {lang === "hi"
              ? "© 2026 Sere Innovations. सर्वाधिकार सुरक्षित।"
              : "© 2026 Sere Innovations. All rights reserved."}
          </p>
          <p>{lang === "hi" ? "किसानों के लिए बनाया गया" : "Built for farmers"}</p>
        </div>
      </div>
    </footer>
  );
}
