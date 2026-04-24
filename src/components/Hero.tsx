import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import { useCountUp } from "@/hooks/useCountUp";
import heroFarm from "@/assets/hero-farm.jpg";

export default function Hero() {
  const { lang } = useLanguage();
  const t = content[lang].hero;
  const cost = useCountUp(10000, 1600);
  const cycle = useCountUp(21, 1400);

  return (
    <section
      id="top"
      className="relative overflow-hidden min-h-screen flex items-center py-20 md:py-28 px-4"
    >
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroFarm}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/60 to-ink/30" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div>
          <span className="text-xs bg-soil/80 text-white px-3 py-1 rounded-full font-semibold inline-block backdrop-blur-sm">
            {t.label}
          </span>
          <h1 className="mt-5 text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
            {t.h1Prefix}{" "}
            <span className="handdrawn-underline text-soil-light">{t.h1Highlight}</span>
          </h1>
          <p className="mt-5 text-lg text-gray-200 leading-relaxed drop-shadow">{t.sub}</p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center bg-white text-soil text-base font-bold rounded-xl px-6 py-4 min-h-[48px] shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              {t.primaryCta}
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#how"
              className="border border-white/50 text-white font-medium rounded-xl px-5 py-3 min-h-[48px] inline-flex items-center hover:bg-white/10 transition"
            >
              {t.secondaryCta}
            </a>
          </div>

          {/* Animated stats bar */}
          <div className="mt-10 grid grid-cols-3 gap-0 max-w-lg bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-4 md:px-8 py-5">
            <div
              ref={cost.ref as React.RefObject<HTMLDivElement>}
              className="px-3 text-center border-r border-white/25"
            >
              <p className="text-lg md:text-xl font-bold text-white leading-none">
                ~₹{cost.count.toLocaleString("en-IN")}
              </p>
              <p className="text-[11px] md:text-xs text-green-200 mt-2 leading-tight">
                {t.stats.cost}
              </p>
            </div>
            <div
              ref={cycle.ref as React.RefObject<HTMLDivElement>}
              className="px-3 text-center border-r border-white/25"
            >
              <p className="text-lg md:text-xl font-bold text-white leading-none">{cycle.count}</p>
              <p className="text-[11px] md:text-xs text-green-200 mt-2 leading-tight">
                {t.stats.cycle}
              </p>
            </div>
            <div className="px-3 text-center flex flex-col justify-center">
              <p className="text-[11px] md:text-xs font-semibold text-green-200 leading-tight">
                {t.stats.skills}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full relative bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl">
          <svg
            viewBox="0 0 380 300"
            className="w-full h-auto"
            role="img"
            aria-label="Smart incubator illustration"
          >
            {/* soft warm backdrop */}
            <defs>
              <radialGradient id="eggGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f4c870" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#f4c870" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="caseGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fffdf7" />
                <stop offset="100%" stopColor="#f4ebd8" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="380" height="300" rx="24" fill="#e8f5e3" />
            {/* steam wisps */}
            <g opacity="0.7">
              <circle
                className="animate-steam"
                style={{ animationDelay: "0s" }}
                cx="150"
                cy="55"
                r="5"
                fill="#ffffff"
              />
              <circle
                className="animate-steam"
                style={{ animationDelay: "0.8s" }}
                cx="190"
                cy="50"
                r="6"
                fill="#ffffff"
              />
              <circle
                className="animate-steam"
                style={{ animationDelay: "1.6s" }}
                cx="230"
                cy="55"
                r="5"
                fill="#ffffff"
              />
            </g>
            {/* handle on top */}
            <rect x="160" y="48" width="60" height="8" rx="4" fill="#3a6b30" />
            <rect x="158" y="54" width="64" height="6" rx="2" fill="#3a6b30" opacity="0.7" />
            {/* incubator body with shadow ring */}
            <rect x="55" y="62" width="270" height="200" rx="22" fill="#3a6b30" opacity="0.12" />
            <rect
              x="60"
              y="60"
              width="260"
              height="195"
              rx="20"
              fill="url(#caseGrad)"
              stroke="#3a6b30"
              strokeWidth="2.5"
            />
            {/* digital display */}
            <rect x="90" y="85" width="200" height="50" rx="8" fill="#1a1a1a" />
            <text
              x="105"
              y="115"
              fontFamily="ui-monospace, monospace"
              fontSize="15"
              fill="#7ed957"
              fontWeight="700"
            >
              🌡 37.5°C
            </text>
            <text
              x="200"
              y="115"
              fontFamily="ui-monospace, monospace"
              fontSize="15"
              fill="#7ed957"
              fontWeight="700"
            >
              💧 60%
            </text>
            {/* power LED */}
            <circle className="animate-soft-pulse" cx="278" cy="100" r="4" fill="#7ed957" />
            <circle cx="278" cy="100" r="6" fill="#7ed957" opacity="0.25" />
            {/* ventilation slots on right */}
            <rect x="300" y="155" width="14" height="2" rx="1" fill="#3a6b30" opacity="0.5" />
            <rect x="300" y="165" width="14" height="2" rx="1" fill="#3a6b30" opacity="0.5" />
            <rect x="300" y="175" width="14" height="2" rx="1" fill="#3a6b30" opacity="0.5" />
            <rect x="300" y="185" width="14" height="2" rx="1" fill="#3a6b30" opacity="0.5" />
            {/* warm glow under eggs */}
            <ellipse cx="190" cy="220" rx="110" ry="22" fill="url(#eggGlow)" />
            {/* eggs */}
            <ellipse
              cx="135"
              cy="210"
              rx="20"
              ry="26"
              fill="#f4e4c1"
              stroke="#8b6340"
              strokeWidth="2"
            />
            <ellipse
              cx="190"
              cy="210"
              rx="20"
              ry="26"
              fill="#f4e4c1"
              stroke="#8b6340"
              strokeWidth="2"
            />
            <ellipse
              cx="245"
              cy="210"
              rx="20"
              ry="26"
              fill="#f4e4c1"
              stroke="#8b6340"
              strokeWidth="2"
            />
            {/* shine */}
            <ellipse cx="129" cy="200" rx="3" ry="6" fill="#ffffff" opacity="0.7" />
            <ellipse cx="184" cy="200" rx="3" ry="6" fill="#ffffff" opacity="0.7" />
            <ellipse cx="239" cy="200" rx="3" ry="6" fill="#ffffff" opacity="0.7" />
            {/* tray base */}
            <rect x="80" y="240" width="220" height="6" rx="3" fill="#3a6b30" opacity="0.2" />
            {/* label */}
            <text
              x="190"
              y="280"
              textAnchor="middle"
              fontFamily="Noto Sans, sans-serif"
              fontSize="12"
              fill="#5a5a5a"
            >
              Smart Incubator by Sere Innovations
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
