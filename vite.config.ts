import path from 'path';
import { readFileSync } from 'node:fs';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// Build-only: esclude dal bundle client gli articoli con publishDate futura o
// status draft. Il registry importa staticamente tutti i 120 moduli articolo:
// il gating runtime li nasconde, ma senza questo filtro finirebbero comunque
// nel chunk blog (~1.5MB raw). Dev e prerender esbuild restano completi
// (il prerender ha il proprio gating per data). BLOG_PREVIEW=1 bypassa.
// In caso di parse fallito l'articolo viene MANTENUTO (fallback sicuro).
function publishedArticlesOnly(): Plugin {
  return {
    name: 'blog-published-only',
    apply: 'build',
    enforce: 'pre',
    transform(code, id) {
      if (!id.replace(/\\/g, '/').endsWith('content/blog/index.ts')) return null;
      if (process.env.BLOG_PREVIEW === '1') return null;
      const today = new Date().toISOString().slice(0, 10);
      const dir = path.dirname(id);
      const excluded = new Set<string>();
      const importRe = /^import (\w+) from '(\.\/articles\/[^']+)';?$/gm;
      let out = code.replace(importRe, (line, ident, rel) => {
        try {
          const src = readFileSync(path.resolve(dir, `${rel}.ts`), 'utf8');
          const date = src.match(/publishDate:\s*'(\d{4}-\d{2}-\d{2})'/)?.[1];
          const draft = /status:\s*'draft'/.test(src);
          if (draft || !date || date > today) {
            excluded.add(ident);
            return '';
          }
        } catch {
          // file illeggibile → tenerlo nel bundle è l'errore meno grave
        }
        return line;
      });
      if (excluded.size === 0) return null;
      for (const ident of excluded) {
        out = out.replace(new RegExp(`\\b${ident}\\b\\s*,`, 'g'), '');
      }
      console.log(`[blog-published-only] esclusi ${excluded.size} articoli non pubblicati dal bundle client`);
      return { code: out, map: null };
    },
  };
}

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react(), publishedArticlesOnly()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
