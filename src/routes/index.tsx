import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemVsSolution from "@/components/ProblemVsSolution";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Trust from "@/components/Trust";
import WhoItsFor from "@/components/WhoItsFor";
import CTAForm from "@/components/CTAForm";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import FAQ from "@/components/FAQ";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SavingsCalculator from "@/components/SavingsCalculator";
import GettingStarted from "@/components/GettingStarted";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sere Innovations | Helping Farmers Hatch Their Own Future" },
      {
        name: "description",
        content:
          "An affordable smart egg incubator built for small poultry farmers in India. Hatch your own chicks at home — no hatchery runs, no delays.",
      },
      {
        property: "og:title",
        content: "Sere Innovations | Helping Farmers Hatch Their Own Future",
      },
      {
        property: "og:description",
        content:
          "Affordable smart incubator (~₹10,000) for small poultry farmers. Honest product. Simple purpose.",
      },
    ],
  }),
  component: Index,
});

function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
}

function Index() {
  return (
    <div className="bg-warm">
      <Navbar />
      <main>
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <ProblemVsSolution />
        </Reveal>
        <SectionDivider from="#ffffff" to="#fffdf7" />
        <Reveal>
          <HowItWorks />
        </Reveal>
        <SectionDivider from="#fffdf7" to="#ffffff" />
        <Reveal>
          <Features />
        </Reveal>
        <SectionDivider from="#ffffff" to="#e8f5e3" />
        <Reveal>
          <Benefits />
        </Reveal>
        <SectionDivider from="#e8f5e3" to="#ffffff" />
        <Reveal>
          <SavingsCalculator />
        </Reveal>
        <Reveal>
          <Trust />
        </Reveal>
        <SectionDivider from="#ffffff" to="#fffdf7" />
        <Reveal>
          <FAQ />
        </Reveal>
        <SectionDivider from="#fffdf7" to="#f4faf2" />
        <Reveal>
          <WhoItsFor />
        </Reveal>
        <Reveal>
          <GettingStarted />
        </Reveal>
        <Reveal>
          <CTAForm />
        </Reveal>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
