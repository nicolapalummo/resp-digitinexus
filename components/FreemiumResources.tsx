import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Mail, CheckCircle2, ArrowLeft, Sparkles, ArrowRight, FileText, ZoomIn, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { langFromPath } from '../lib/i18nRouting';

const EMAIL_STORAGE_KEY = 'digitinexus-resources-email';

// Lead generation "a preview": per ogni PDF il visitatore vede solo le prime 2
// pagine (immagini pre-renderizzate) + alcune pagine SFOCATE A MONTE (il blur è
// nell'immagine stessa, non CSS: il contenuto completo non arriva mai al
// browser). I PDF completi vivono in private/ lato server e partono solo via
// email (/api/send-resources → CRM + link firmati a scadenza).
const RESOURCES = [
  { key: 'step1', previewKey: 'guida-google-business-profile', pages: 25, number: '01' },
  { key: 'step2', previewKey: '10-pilastri-del-marketing', pages: 11, number: '02' },
  { key: 'step3', previewKey: 'strategie-marketing-offline-pmi', pages: 5, number: '03' },
] as const;

const isValidEmail = (v: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

// ── Animation variants ──────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Component ────────────────────────────────────────────────────────
export const FreemiumResources: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const locale = langFromPath(location.pathname);

  const [email, setEmail] = useState('');
  const [consenso, setConsenso] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sentTo, setSentTo] = useState<string | null>(null);
  // Lightbox: solo le 2 pagine leggibili si ingrandiscono (versione hi-res z{n}.webp)
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoom(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [zoom]);

  // Scroll to top on mount + prefill dell'email se già lasciata in passato
  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      const stored = localStorage.getItem(EMAIL_STORAGE_KEY);
      if (stored) setEmail(stored);
    } catch {
      // ignore
    }
  }, []);

  const scrollToForm = useCallback(() => {
    document.getElementById('ricevi-pdf')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  // Submit: registra nel CRM e fa partire l'email con i 3 PDF completi.
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const value = email.trim().toLowerCase();
      if (!isValidEmail(value)) {
        setError(t('freemium.mail.invalid'));
        return;
      }
      setSubmitting(true);
      setError(null);
      try {
        const res = await fetch('/api/send-resources', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: value, consensoMarketing: consenso, locale }),
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.emailSent) {
          try {
            localStorage.setItem(EMAIL_STORAGE_KEY, value);
          } catch {
            // ignore storage errors
          }
          setSentTo(value);
        } else if (res.ok) {
          // Il contatto è comunque registrato nel CRM: solo l'email è fallita.
          setError(t('freemium.mail.errorSend'));
        } else {
          setError(t('freemium.mail.errorGeneric'));
        }
      } catch {
        setError(t('freemium.mail.errorGeneric'));
      } finally {
        setSubmitting(false);
      }
    },
    [email, consenso, locale, t],
  );

  // ── Render ───────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* ── Decorative background blobs ────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-orange-500/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/[0.02] rounded-full blur-[120px]" />
      </div>

      {/* ── Spacer for fixed header ────────────────────────────── */}
      <div className="h-28" />

      {/* ── Hero section ───────────────────────────────────────── */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-4xl mx-auto px-6 pt-4 pb-14 text-center"
      >
        <motion.a
          href="/"
          variants={itemVariants}
          className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors duration-300 mb-12 group"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform duration-300"
          />
          {t('freemium.backHome')}
        </motion.a>

        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9]">
            <span className="text-white">Hub Risorse</span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-300 bg-clip-text text-transparent">
              DigitiNexus
            </span>
          </h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-8 text-lg md:text-xl text-white/40 max-w-xl mx-auto font-light"
        >
          {t('freemium.pageSubtitle')}
        </motion.p>

        <motion.button
          variants={itemVariants}
          onClick={scrollToForm}
          className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-orange-500/25 bg-orange-500/[0.07] px-5 py-2.5 text-sm font-medium text-orange-300 hover:bg-orange-500/[0.14] hover:border-orange-500/40 transition-colors"
        >
          <Mail size={15} />
          {t('freemium.mail.button')}
        </motion.button>
      </motion.section>

      {/* ── Resource preview cards ─────────────────────────────── */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-3xl mx-auto px-6 pb-4"
      >
        <div className="space-y-6">
          {RESOURCES.map((res) => (
            <motion.div
              key={res.key}
              variants={itemVariants}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 hover:border-white/15 transition-colors duration-500"
            >
              {/* Header: number + category + pages */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl md:text-4xl font-bold tabular-nums leading-none text-white">
                    {res.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em] px-3 py-1 rounded-full border border-white/10 text-white/40">
                    {t(`freemium.${res.key}.category`)}
                  </span>
                </div>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono uppercase tracking-wider text-white/40">
                  <FileText size={12} className="text-orange-400/60" />
                  {res.pages} {locale === 'en' ? 'pages' : 'pagine'}
                </span>
              </div>

              {/* Title + description */}
              <h3 className="text-lg md:text-xl font-semibold text-white/90 mb-2">
                {t(`freemium.${res.key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-white/40 mb-6">
                {t(`freemium.${res.key}.description`)}
              </p>

              {/* Preview strip: 2 pagine leggibili + pagine sfocate */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {[1, 2].map((n) => {
                  const alt = `${t(`freemium.${res.key}.title`)} – ${t('freemium.preview.pageLabel', { n })}`;
                  return (
                    <figure key={`p${n}`} className="flex-shrink-0 w-36 md:w-44">
                      <button
                        type="button"
                        onClick={() =>
                          setZoom({ src: `/freemium/preview/${res.previewKey}/z${n}.webp`, alt })
                        }
                        className="group relative block w-full cursor-zoom-in"
                        aria-label={alt}
                      >
                        <img
                          src={`/freemium/preview/${res.previewKey}/p${n}.webp`}
                          alt={alt}
                          width={640}
                          height={828}
                          loading="lazy"
                          className="w-full h-auto rounded-lg border border-white/10 group-hover:border-orange-400/40 transition-colors"
                        />
                        <span className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/0 group-hover:bg-black/25 transition-colors">
                          <ZoomIn
                            size={20}
                            className="text-white opacity-0 group-hover:opacity-90 transition-opacity drop-shadow"
                          />
                        </span>
                      </button>
                      <figcaption className="mt-1.5 text-center text-[10px] font-mono uppercase tracking-wider text-white/30">
                        {t('freemium.preview.pageLabel', { n })}
                      </figcaption>
                    </figure>
                  );
                })}

                {/* Pagine oltre la seconda: immagini GIÀ sfocate + overlay lucchetto */}
                <div className="relative flex gap-3 flex-shrink-0">
                  {[1, 2, 3].map((n) => (
                    <img
                      key={`b${n}`}
                      src={`/freemium/preview/${res.previewKey}/b${n}.webp`}
                      alt=""
                      aria-hidden
                      width={640}
                      height={828}
                      loading="lazy"
                      className="w-36 md:w-44 h-auto rounded-lg border border-white/10 select-none pointer-events-none"
                    />
                  ))}
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/30"
                    aria-label={t('freemium.preview.lockedLabel')}
                  >
                    <span className="flex items-center gap-2 rounded-full bg-zinc-900/95 border border-white/[0.1] px-4 py-2 text-[11px] font-mono uppercase tracking-[0.12em] text-white/70 shadow-xl hover:border-orange-400/40 hover:text-white transition-colors">
                      <Lock size={12} className="text-orange-400/80" />
                      {t('freemium.preview.lockedLabel')}
                    </span>
                  </button>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-white/35">
                  {t('freemium.preview.label', { pages: res.pages })}
                </span>
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-orange-400 hover:text-orange-300 transition-colors"
                >
                  {t('freemium.preview.lockedCta')}
                  <ArrowRight size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Email form (unico, centrale) ───────────────────────── */}
      <section id="ricevi-pdf" className="relative max-w-2xl mx-auto px-6 pt-10 pb-6 scroll-mt-32">
        <AnimatePresence mode="wait">
          {sentTo ? (
            <motion.div
              key="sent"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-6 md:p-8 text-center"
            >
              <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                <CheckCircle2 size={22} />
              </span>
              <p className="text-lg font-semibold text-emerald-300">{t('freemium.mail.success')}</p>
              <p className="mt-2 text-sm text-white/40">{t('freemium.mail.successHint')}</p>
              <p className="mt-1 text-xs font-mono text-white/30">{sentTo}</p>
              <button
                type="button"
                onClick={() => {
                  setSentTo(null);
                  setEmail('');
                  try {
                    localStorage.removeItem(EMAIL_STORAGE_KEY);
                  } catch {
                    // ignore
                  }
                }}
                className="mt-5 text-xs text-white/40 underline underline-offset-4 hover:text-white/70 transition-colors"
              >
                {t('freemium.mail.another')}
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-orange-500/20 bg-gradient-to-b from-orange-500/[0.06] to-white/[0.01] p-6 md:p-8"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                  <Mail size={18} />
                </span>
                <h2 className="text-xl font-semibold text-white md:text-2xl">
                  {t('freemium.mail.title')}
                </h2>
              </div>
              <p className="mb-5 text-sm text-white/50">{t('freemium.mail.subtitle')}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('freemium.mail.placeholder')}
                  aria-label={t('freemium.mail.placeholder')}
                  className="flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-orange-500/50"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 font-medium text-white transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? t('freemium.mail.sending') : t('freemium.mail.button')}
                </button>
              </div>
              {/* Consenso marketing: FACOLTATIVO e mai pre-spuntato (GDPR).
                  La consegna dei PDF è transazionale e non dipende dalla spunta. */}
              <label className="mt-3 flex cursor-pointer items-start gap-2 text-xs text-white/40">
                <input
                  type="checkbox"
                  checked={consenso}
                  onChange={(e) => setConsenso(e.target.checked)}
                  className="mt-0.5 accent-orange-500"
                />
                {t('freemium.gate.privacy')}
              </label>
              {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
            </motion.form>
          )}
        </AnimatePresence>
      </section>

      {/* ── Final CTA section ──────────────────────────────────── */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-3xl mx-auto px-6 pt-8 pb-12"
      >
        <motion.div variants={itemVariants}>
          <div className="relative rounded-3xl border overflow-hidden bg-gradient-to-br from-orange-500/[0.08] via-amber-500/[0.05] to-orange-500/[0.08] border-orange-500/20">
            <div className="relative p-8 md:p-14 text-center">
              <div className="inline-flex items-center gap-2 mb-8 text-orange-400/80">
                <Sparkles size={18} />
                <span className="text-xs font-mono uppercase tracking-[0.2em]">
                  {t('freemium.finalTitle')}
                </span>
                <Sparkles size={18} />
              </div>

              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {t('freemium.finalDescription')}
              </h2>

              <motion.a
                href="https://calendly.com/digitinexus/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold px-8 py-4 rounded-2xl text-base md:text-lg mt-8 shadow-2xl shadow-orange-500/20 hover:shadow-orange-500/35 transition-all duration-300"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('freemium.finalCta')}
                <ArrowRight size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* ── Bottom spacer ──────────────────────────────────────── */}
      <div className="h-24" />

      {/* ── Lightbox per le pagine di anteprima leggibili ──────── */}
      <AnimatePresence>
        {zoom && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setZoom(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 md:p-8 cursor-zoom-out"
            role="dialog"
            aria-modal="true"
            aria-label={zoom.alt}
          >
            <button
              type="button"
              onClick={() => setZoom(null)}
              className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Chiudi"
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              src={zoom.src}
              alt={zoom.alt}
              className="max-h-full max-w-full rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
