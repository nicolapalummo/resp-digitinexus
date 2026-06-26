import React from 'react';
import { Link } from 'react-router-dom';
import { isInternalArticleLinkActive } from '../../lib/blog';

// Minimal inline markup parser (no dependency).
// Supports: **bold**, *italic*, [anchor](/internal) or [anchor](https://external)
// Internal links (starting with /) use react-router <Link>; external open in a new tab.

const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;

export function parseInline(text: string): React.ReactNode[] {
  const parts = text.split(TOKEN).filter((p) => p !== '');
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-white">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      const isInternal = href.startsWith('/');
      if (isInternal) {
        // Scheduling-aware: link to a not-yet-published article → bold plain text.
        if (!isInternalArticleLinkActive(href)) {
          return <strong key={i} className="font-semibold text-white">{label}</strong>;
        }
        return (
          <Link key={i} to={href} className="text-orange-400 underline underline-offset-2 hover:text-orange-300 transition-colors">
            {label}
          </Link>
        );
      }
      return (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400 underline underline-offset-2 hover:text-orange-300 transition-colors"
        >
          {label}
        </a>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}
