import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/content";

const INCUBATOR_COST = 10000;
const HATCHERY_COST_REDUCTION_PERCENT = 0.65;

function NumberInput({
  id,
  label,
  value,
  onChange,
  prefix,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (n: number) => void;
  prefix?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-ink mb-2 block">
        {label}
      </label>
      <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-soil transition">
        {prefix && (
          <span className="px-3 py-3 bg-gray-50 text-gray-500 text-sm border-r border-gray-200 font-semibold">
            {prefix}
          </span>
        )}
        <input
          id={id}
          type="number"
          min={1}
          inputMode="numeric"
          value={value}
          aria-label={label}
          onChange={(e) => onChange(Math.max(1, parseInt(e.target.value) || 1))}
          className="flex-1 px-4 py-3 text-lg font-semibold text-ink outline-none bg-white"
        />
      </div>
    </div>
  );
}

export default function SavingsCalculator() {
  const { lang } = useLanguage();
  const t = content[lang].calculator;

  const [batches, setBatches] = useState(6);
  const [chicks, setChicks] = useState(60);
  const [costPerChick, setCostPerChick] = useState(45);

  const currentAnnualSpend = batches * chicks * costPerChick;
  const annualSaving = Math.round(currentAnnualSpend * HATCHERY_COST_REDUCTION_PERCENT);
  const paybackMonths = annualSaving > 0 ? Math.ceil((INCUBATOR_COST / annualSaving) * 12) : 0;

  const fmt = (n: number) => (Number.isFinite(n) && n > 0 ? `₹${n.toLocaleString("en-IN")}` : "—");

  return (
    <section
      id="calculator"
      aria-labelledby="section-calculator-heading"
      className="bg-soil-light py-20 md:py-28 px-4"
    >
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-md p-8 md:p-12">
        <div className="text-center">
          <h2 id="section-calculator-heading" className="text-2xl md:text-3xl font-bold text-ink">
            {t.headline}
          </h2>
          <div className="w-12 h-1 bg-gold rounded-full mx-auto mt-3" />
          <p className="text-base text-muted max-w-xl mx-auto mt-3">{t.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <NumberInput
            id="calc-batches"
            label={t.labels.batchesPerYear}
            value={batches}
            onChange={setBatches}
          />
          <NumberInput
            id="calc-chicks"
            label={t.labels.chicksPerBatch}
            value={chicks}
            onChange={setChicks}
          />
          <NumberInput
            id="calc-cost"
            label={t.labels.costPerChick}
            value={costPerChick}
            onChange={setCostPerChick}
            prefix="₹"
          />
        </div>

        <div className="mt-6">
          <label className="text-sm font-semibold text-ink mb-2 block">
            {t.labels.incubatorCost}
          </label>
          <div className="w-full bg-soil-light border border-soil/30 rounded-xl px-4 py-3 text-lg font-semibold text-soil">
            ₹{INCUBATOR_COST.toLocaleString("en-IN")}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="bg-soil-light border border-soil/20 rounded-2xl p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-soil/70 mb-2">
              {t.results.currentSpend}
            </p>
            <p className="text-2xl font-bold text-ink">{fmt(currentAnnualSpend)}</p>
          </div>
          <div className="bg-soil rounded-2xl p-6 text-center text-white shadow-lg md:scale-105 z-10 relative">
            <span className="inline-block text-xs bg-white/20 px-2 py-0.5 rounded-full mb-2">
              {t.results.estimatedSaving}
            </span>
            <p className="text-4xl font-black text-white">{fmt(annualSaving)}</p>
            <p className="text-sm text-white/85 mt-1">{t.results.perYear}</p>
          </div>
          <div className="bg-soil-light border border-soil/20 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-soil/70 mb-2">
              {t.results.paybackPeriod}
            </p>
            <p className="text-2xl font-bold text-ink">
              {paybackMonths > 0 ? `${paybackMonths} ${t.results.months}` : "—"}
            </p>
            {paybackMonths > 0 && paybackMonths <= 12 && (
              <span className="mt-3 inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs font-semibold px-4 py-2 rounded-full">
                {t.results.firstYearBadge}
              </span>
            )}
          </div>
        </div>

        <p className="mt-8 text-xs text-muted text-center italic border-t border-gray-100 pt-6">
          {t.disclaimer}
        </p>

        <p className="mt-4 text-sm font-medium text-ink text-center">
          {t.ctaNote}{" "}
          <a
            href="#contact"
            className="text-soil underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-soil focus-visible:ring-offset-2 rounded"
          >
            {t.ctaBtn}
          </a>
        </p>
      </div>
    </section>
  );
}
