import React from 'react';
import { Info, Lightbulb, AlertTriangle, AlertCircle, ArrowRight } from 'lucide-react';
import type { ContentBlock } from '../../content/blog/types';
import { slugifyHeading } from '../../lib/blog';
import { parseInline } from './inline';
import { CostCalculator } from './CostCalculator';

const CALLOUT_STYLES = {
  info: { Icon: Info, ring: 'border-white/10 bg-white/[0.03]', icon: 'text-blue-300' },
  tip: { Icon: Lightbulb, ring: 'border-orange-500/20 bg-orange-500/[0.04]', icon: 'text-orange-400' },
  warning: { Icon: AlertTriangle, ring: 'border-yellow-500/20 bg-yellow-500/[0.04]', icon: 'text-yellow-300' },
  placeholder: { Icon: AlertCircle, ring: 'border-red-500/30 bg-red-500/[0.06]', icon: 'text-red-300' },
} as const;

export const Block: React.FC<{ block: ContentBlock }> = ({ block }) => {
  switch (block.type) {
    case 'capsule':
      return (
        <div className="my-8 rounded-2xl border border-orange-500/25 bg-orange-500/[0.06] p-6 md:p-7">
          <div className="mb-2 text-[11px] font-mono uppercase tracking-[0.2em] text-orange-400/80">
            In breve
          </div>
          <p className="text-lg md:text-xl font-medium leading-relaxed text-white/95">
            {parseInline(block.text)}
          </p>
        </div>
      );

    case 'h2': {
      const id = block.id ?? slugifyHeading(block.text);
      return (
        <h2 id={id} className="scroll-mt-28 mt-14 mb-4 text-2xl md:text-3xl font-semibold tracking-tight text-white">
          {block.text}
        </h2>
      );
    }
    case 'h3': {
      const id = block.id ?? slugifyHeading(block.text);
      return (
        <h3 id={id} className="scroll-mt-28 mt-9 mb-3 text-xl md:text-2xl font-semibold tracking-tight text-white/90">
          {block.text}
        </h3>
      );
    }

    case 'p':
      return (
        <p className={`my-4 text-[1.05rem] leading-[1.75] ${block.lead ? 'text-white/90 font-medium' : 'text-foreground/85'}`}>
          {parseInline(block.text)}
        </p>
      );

    case 'list':
      return block.ordered ? (
        <ol className="my-5 ml-5 list-decimal space-y-2.5 text-[1.05rem] leading-relaxed text-foreground/85 marker:text-orange-400/70">
          {block.items.map((it, i) => <li key={i} className="pl-1.5">{parseInline(it)}</li>)}
        </ol>
      ) : (
        <ul className="my-5 ml-1 space-y-2.5 text-[1.05rem] leading-relaxed text-foreground/85">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-400/70" />
              <span>{parseInline(it)}</span>
            </li>
          ))}
        </ul>
      );

    case 'table':
      return (
        <figure className="my-8 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full border-collapse text-left text-sm md:text-base">
            <thead>
              <tr className="bg-white/[0.04]">
                {block.headers.map((h, i) => (
                  <th key={i} className="border-b border-white/10 px-4 py-3 font-semibold text-white/90">
                    {parseInline(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="even:bg-white/[0.015]">
                  {row.map((cell, c) => (
                    <td key={c} className="border-b border-white/5 px-4 py-3 text-foreground/85 align-top">
                      {parseInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {block.caption && (
            <figcaption className="px-4 py-2.5 text-xs text-muted">{parseInline(block.caption)}</figcaption>
          )}
        </figure>
      );

    case 'callout': {
      const s = CALLOUT_STYLES[block.variant];
      const label =
        block.variant === 'placeholder' ? 'Da confermare prima della pubblicazione' :
        block.variant === 'warning' ? 'Attenzione' :
        block.variant === 'tip' ? 'Consiglio' : 'Nota';
      return (
        <div className={`my-6 flex gap-3.5 rounded-2xl border p-5 ${s.ring}`}>
          <s.Icon className={`mt-0.5 h-5 w-5 flex-shrink-0 ${s.icon}`} />
          <div>
            <div className={`mb-1 text-xs font-semibold uppercase tracking-wide ${s.icon}`}>{label}</div>
            <p className="text-[0.98rem] leading-relaxed text-foreground/85">{parseInline(block.text)}</p>
          </div>
        </div>
      );
    }

    case 'quote':
      return (
        <blockquote className="my-7 border-l-2 border-orange-500/50 pl-5 text-lg italic text-white/85">
          {parseInline(block.text)}
          {block.cite && <cite className="mt-2 block text-sm not-italic text-muted">— {block.cite}</cite>}
        </blockquote>
      );

    case 'cta':
      return (
        <div className="my-9 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
          <p className="mb-4 text-lg font-medium text-white/95">{parseInline(block.text)}</p>
          <a
            href={block.href}
            target={block.href.startsWith('http') ? '_blank' : undefined}
            rel={block.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            {block.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      );

    case 'calculator':
      return <CostCalculator />;

    default:
      return null;
  }
};

export const ArticleBlocks: React.FC<{ blocks: ContentBlock[] }> = ({ blocks }) => (
  <>{blocks.map((b, i) => <Block key={i} block={b} />)}</>
);
