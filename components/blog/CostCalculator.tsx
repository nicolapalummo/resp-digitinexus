import React, { useState } from 'react';
import { SITE } from '../../content/blog/config';

// ── Pure estimate logic (deterministic, SSR-safe, no window) ────────────────
export type ProjectType = 'landing' | 'vetrina' | 'ecommerce';
export type Integrations = 'nessuna' | 'base' | 'avanzate';
export type Content = 'pronti' | 'da_realizzare';

export interface CalcInput {
  type: ProjectType;
  integrations: Integrations;
  content: Content;
}
export interface CalcOutput {
  priceLabel: string;
  timeLabel: string;
  recurring: string;
  note: string;
  included: string[];
}

const RECURRING = '260–820 €/anno (dominio, hosting, manutenzione)';

// First-party DigitiNexus ranges. Output is always a range/estimate, never a quote.
export function calcStima(input: CalcInput): CalcOutput {
  if (input.type === 'landing') {
    return {
      priceLabel: '500–900 €',
      timeLabel: input.content === 'da_realizzare' ? '4–5 giorni lavorativi' : '3–5 giorni lavorativi',
      recurring: RECURRING,
      note: 'Una pagina pensata per convertire, con copywriting incluso.',
      included: ['Design su misura', 'Copywriting incluso'],
    };
  }
  if (input.type === 'ecommerce') {
    return {
      priceLabel: 'su preventivo, da 3.000 €',
      timeLabel: '4–8 settimane',
      recurring: RECURRING,
      note: 'Progetto su misura: il prezzo dipende da catalogo, pagamenti e integrazioni.',
      included: ['Design su misura', 'Copywriting incluso'],
    };
  }
  // vetrina: pagine illimitate, prezzo fisso; solo le integrazioni avanzate spostano la fascia
  const advanced = input.integrations === 'avanzate';
  return {
    priceLabel: advanced ? '3.300–5.000 €' : '2.500–3.000 €',
    timeLabel: input.content === 'da_realizzare' ? '3–4 settimane' : '2–3 settimane',
    recurring: RECURRING,
    note: 'Pagine illimitate e copywriting inclusi: il prezzo non cambia col numero di pagine.',
    included: ['Design su misura', 'Pagine illimitate', 'Copywriting incluso'],
  };
}

// ── UI ──────────────────────────────────────────────────────────────────────
interface FieldProps<T extends string> {
  legend: string;
  name: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}
function RadioField<T extends string>({ legend, name, value, options, onChange }: FieldProps<T>) {
  return (
    <fieldset className="border-0 p-0 m-0">
      <legend className="mb-2 text-sm font-medium text-white/90">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const id = `${name}-${o.value}`;
          const checked = value === o.value;
          return (
            <label
              key={o.value}
              htmlFor={id}
              className={`cursor-pointer rounded-xl border px-4 py-2 text-sm transition-colors focus-within:ring-2 focus-within:ring-orange-400/60 ${
                checked
                  ? 'border-orange-400/60 bg-orange-500/15 text-white'
                  : 'border-white/15 text-foreground/70 hover:border-white/30'
              }`}
            >
              <input
                type="radio"
                id={id}
                name={name}
                value={o.value}
                checked={checked}
                onChange={() => onChange(o.value)}
                className="sr-only"
              />
              {o.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export const CostCalculator: React.FC = () => {
  const [type, setType] = useState<ProjectType>('vetrina');
  const [integrations, setIntegrations] = useState<Integrations>('nessuna');
  const [content, setContent] = useState<Content>('pronti');

  const out = calcStima({ type, integrations, content });

  return (
    <section
      aria-label="Calcolatore stima costo e tempi"
      className="my-10 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
    >
      <div className="mb-1 text-[11px] font-mono uppercase tracking-[0.2em] text-orange-400/80">
        Stima costo e tempi
      </div>
      <h3 className="mb-6 text-xl md:text-2xl font-semibold text-white">
        Stima il tuo progetto in 3 domande
      </h3>

      <div className="grid gap-6 md:grid-cols-3">
        <RadioField
          legend="Tipo di progetto"
          name="calc-type"
          value={type}
          onChange={setType}
          options={[
            { value: 'landing', label: 'Landing page' },
            { value: 'vetrina', label: 'Sito vetrina' },
            { value: 'ecommerce', label: 'E-commerce' },
          ]}
        />
        <RadioField
          legend="Integrazioni"
          name="calc-integrations"
          value={integrations}
          onChange={setIntegrations}
          options={[
            { value: 'nessuna', label: 'Nessuna' },
            { value: 'base', label: 'Base (form, analytics)' },
            { value: 'avanzate', label: 'Avanzate (CRM, prenotazioni, pagamenti)' },
          ]}
        />
        <RadioField
          legend="Contenuti (il copy è sempre incluso)"
          name="calc-content"
          value={content}
          onChange={setContent}
          options={[
            { value: 'pronti', label: 'Pronti' },
            { value: 'da_realizzare', label: 'Da realizzare' },
          ]}
        />
      </div>

      {/* Result */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-5" aria-live="polite">
          <div className="text-xs uppercase tracking-wider text-foreground/50">Fascia di prezzo</div>
          <div className="mt-1 text-2xl md:text-3xl font-semibold text-white">{out.priceLabel}</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/30 p-5" aria-live="polite">
          <div className="text-xs uppercase tracking-wider text-foreground/50">Tempi di consegna</div>
          <div className="mt-1 text-2xl md:text-3xl font-semibold text-white">{out.timeLabel}</div>
        </div>
      </div>

      <p className="mt-4 text-sm text-foreground/70">{out.note}</p>
      <p className="mt-1 text-sm text-foreground/60">
        Costi ricorrenti a parte: <span className="text-foreground/80">{out.recurring}</span>
      </p>

      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-foreground/70">
        {out.included.map((i) => (
          <li key={i} className="before:mr-1.5 before:text-orange-400 before:content-['✓']">{i}</li>
        ))}
      </ul>

      <a
        href={SITE.bookCallUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-medium text-black transition-transform hover:scale-105 duration-300"
      >
        Parliamone
      </a>

      <p className="mt-4 text-xs text-foreground/50">
        Stima orientativa, non un preventivo: i numeri sono fasce basate sulla nostra esperienza. Il preventivo
        definitivo nasce da una breve call sul tuo progetto.
      </p>
    </section>
  );
};
