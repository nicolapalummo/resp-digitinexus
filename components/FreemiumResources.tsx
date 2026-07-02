import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Download, CheckCircle2, ArrowLeft, Sparkles, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const STORAGE_KEY = 'digitinexus-freemium-progress';
const EMAIL_STORAGE_KEY = 'digitinexus-resources-email';
// Web3Forms access key — public by design (safe in client code). Free key at web3forms.com.
const WEB3FORMS_ACCESS_KEY = 'PASTE_YOUR_WEB3FORMS_ACCESS_KEY';

const PDF_FILES = [
  '/freemium/Guida Ottimizzazione Google Business Profil | DigitiNexus.pdf',
  '/freemium/10 Pilastri del Marketing | DigitiNexus.pdf',
  '/freemium/Strategie di Marketing Offline per PMI | DigitiNexus.pdf',
];

interface ProgressState {
  step1: boolean;
  step2: boolean;
  step3: boolean;
}

// Encode each segment of a file path for safe URL usage
const encodePdfPath = (path: string): string => {
  return path
    .split('/')
    .map((segment) => (segment ? encodeURIComponent(segment) : ''))
    .join('/');
};

const getStoredProgress = (): ProgressState => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // ignore
  }
  return { step1: false, step2: false, step3: false };
};

const getStoredEmail = (): boolean => {
  try {
    return !!localStorage.getItem(EMAIL_STORAGE_KEY);
  } catch {
    return false;
  }
};

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
  const [progress, setProgress] = useState<ProgressState>(getStoredProgress);
  const [justCompleted, setJustCompleted] = useState<string | null>(null);
  const [showFinalReveal, setShowFinalReveal] = useState(false);

  // Email gate: resources stay locked until the visitor leaves their email.
  const [emailUnlocked, setEmailUnlocked] = useState<boolean>(getStoredEmail);
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [gateError, setGateError] = useState<string | null>(null);

  const completedCount = [progress.step1, progress.step2, progress.step3].filter(Boolean).length;
  const allComplete = completedCount === 3;

  // Which step is being "unlocked next" right after a download
  const nextUnlocking =
    justCompleted === 'step1' ? 'step2' : justCompleted === 'step2' ? 'step3' : null;

  // Persist progress
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isUnlocked = useCallback(
    (stepKey: keyof ProgressState): boolean => {
      if (!emailUnlocked) return false; // email gate: nothing is accessible without the email
      switch (stepKey) {
        case 'step1':
          return true; // available once the email is left
        case 'step2':
          return progress.step1;
        case 'step3':
          return progress.step2;
        default:
          return false;
      }
    },
    [progress, emailUnlocked],
  );

  const handleDownload = useCallback(
    (stepKey: keyof ProgressState, fileIndex: number) => {
      if (!emailUnlocked) return; // gate: no download without the email
      // Trigger the actual file download
      const a = document.createElement('a');
      a.href = encodePdfPath(PDF_FILES[fileIndex]);
      a.download = '';
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Update state only for first-time downloads
      if (!progress[stepKey]) {
        setJustCompleted(stepKey);
        setProgress((prev) => {
          const next = { ...prev, [stepKey]: true };
          // Check if all complete after this download
          if (next.step1 && next.step2 && next.step3) {
            setTimeout(() => setShowFinalReveal(true), 900);
          }
          return next;
        });
        setTimeout(() => setJustCompleted(null), 2800);
      }
    },
    [progress, emailUnlocked],
  );

  // Submit the email to Web3Forms, then unlock the resources.
  const handleEmailSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const value = email.trim();
      if (!isValidEmail(value)) {
        setGateError(t('freemium.gate.invalid'));
        return;
      }
      setSubmitting(true);
      setGateError(null);
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            email: value,
            subject: 'Nuovo contatto — Risorse gratuite DigitiNexus',
            from_name: 'DigitiNexus — Risorse gratuite',
          }),
        });
        const data = await res.json();
        if (data.success) {
          try {
            localStorage.setItem(EMAIL_STORAGE_KEY, value);
          } catch {
            // ignore storage errors
          }
          setEmailUnlocked(true);
        } else {
          setGateError(t('freemium.gate.error'));
        }
      } catch {
        setGateError(t('freemium.gate.error'));
      } finally {
        setSubmitting(false);
      }
    },
    [email, t],
  );

  // ── Step definitions ─────────────────────────────────────────────
  const steps: Array<{
    key: keyof ProgressState;
    fileIndex: number;
    number: string;
  }> = [
    { key: 'step1', fileIndex: 0, number: '01' },
    { key: 'step2', fileIndex: 1, number: '02' },
    { key: 'step3', fileIndex: 2, number: '03' },
  ];

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

      {/* ── Sticky progress bar ────────────────────────────────── */}
      <div className="sticky top-24 z-40 px-4 md:px-0 mb-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-zinc-950/90 backdrop-blur-2xl rounded-2xl border border-white/[0.06] px-6 py-4 shadow-2xl"
          >
            {/* Label + percentage */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono text-white/30 uppercase tracking-[0.2em]">
                {t('freemium.progress')}
              </span>
              <span className="text-[11px] font-mono text-orange-400/80 tabular-nums">
                {Math.round((completedCount / 3) * 100)}%
              </span>
            </div>

            {/* Track */}
            <div className="relative h-1 bg-white/[0.04] rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400"
                initial={{ width: '0%' }}
                animate={{ width: `${(completedCount / 3) * 100}%` }}
                transition={{ type: 'spring', stiffness: 60, damping: 20, delay: 0.5 }}
              />
              {/* Glow layer */}
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 blur-sm opacity-50"
                initial={{ width: '0%' }}
                animate={{ width: `${(completedCount / 3) * 100}%` }}
                transition={{ type: 'spring', stiffness: 60, damping: 20, delay: 0.5 }}
              />
            </div>

            {/* Step markers */}
            <div className="flex justify-between mt-3 px-1">
              {steps.map((step, i) => (
                <div key={step.key} className="flex items-center gap-2">
                  <motion.div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border transition-all duration-700 ${
                      progress[step.key]
                        ? 'bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/30'
                        : isUnlocked(step.key)
                          ? 'bg-transparent border-white/20 text-white/60'
                          : 'bg-transparent border-white/[0.06] text-white/20'
                    }`}
                    animate={
                      justCompleted === step.key ? { scale: [1, 1.3, 1] } : {}
                    }
                    transition={{ duration: 0.5 }}
                  >
                    {progress[step.key] ? '✓' : i + 1}
                  </motion.div>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider hidden md:inline transition-colors duration-500 ${
                      progress[step.key] ? 'text-orange-400/70' : 'text-white/20'
                    }`}
                  >
                    {t(`freemium.${step.key}.category`)}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Hero section ───────────────────────────────────────── */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-4xl mx-auto px-6 pt-4 pb-16 text-center"
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
      </motion.section>

      {/* ── Email gate ─────────────────────────────────────────── */}
      <section className="relative max-w-2xl mx-auto px-6 pb-10">
        <AnimatePresence mode="wait">
          {!emailUnlocked ? (
            <motion.form
              key="gate"
              onSubmit={handleEmailSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-orange-500/20 bg-gradient-to-b from-orange-500/[0.06] to-white/[0.01] p-6 md:p-8"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                  <Lock size={18} />
                </span>
                <h2 className="text-xl font-semibold text-white md:text-2xl">{t('freemium.gate.title')}</h2>
              </div>
              <p className="mb-5 text-sm text-white/50">{t('freemium.gate.subtitle')}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('freemium.gate.placeholder')}
                  aria-label={t('freemium.gate.placeholder')}
                  className="flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-orange-500/50"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 font-medium text-white transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? t('freemium.gate.sending') : t('freemium.gate.button')}
                </button>
              </div>
              {gateError && <p className="mt-3 text-sm text-red-400">{gateError}</p>}
            </motion.form>
          ) : (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] px-5 py-3"
            >
              <CheckCircle2 size={16} className="text-emerald-400" />
              <span className="text-sm text-emerald-300">{t('freemium.gate.unlocked')}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── Steps section ──────────────────────────────────────── */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-3xl mx-auto px-6 pb-12"
      >
        <div className="space-y-5">
          {steps.map((step, index) => {
            const unlocked = isUnlocked(step.key);
            const completed = progress[step.key];
            const wasJustCompleted = justCompleted === step.key;
            const isBeingUnlocked = nextUnlocking === step.key;

            return (
              <motion.div key={step.key} variants={itemVariants} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 -bottom-5 w-px h-5">
                    <div
                      className={`w-full h-full transition-colors duration-700 ${
                        completed
                          ? 'bg-gradient-to-b from-orange-500/30 to-orange-500/0'
                          : 'bg-gradient-to-b from-white/[0.06] to-transparent'
                      }`}
                    />
                  </div>
                )}

                {/* Card */}
                <motion.div
                  className={`relative rounded-2xl border backdrop-blur-sm transition-all duration-700 overflow-hidden ${
                    completed
                      ? 'bg-orange-500/[0.04] border-orange-500/15'
                      : unlocked
                        ? 'bg-white/[0.02] border-white/[0.08] hover:border-white/15 hover:bg-white/[0.03]'
                        : 'bg-white/[0.01] border-white/[0.04]'
                  }`}
                  whileHover={
                    unlocked && !completed ? { y: -2, transition: { duration: 0.2 } } : {}
                  }
                  animate={
                    wasJustCompleted
                      ? {
                          boxShadow: [
                            '0 0 0 0 rgba(249,115,22,0)',
                            '0 0 50px 0 rgba(249,115,22,0.18)',
                            '0 0 0 0 rgba(249,115,22,0)',
                          ],
                        }
                      : isBeingUnlocked
                        ? {
                            borderColor: [
                              'rgba(255,255,255,0.04)',
                              'rgba(249,115,22,0.4)',
                              'rgba(255,255,255,0.08)',
                            ],
                          }
                        : {}
                  }
                  transition={
                    wasJustCompleted || isBeingUnlocked ? { duration: 1.5 } : {}
                  }
                >
                  {/* Card inner content */}
                  <div
                    className={`relative p-6 md:p-8 transition-all duration-700 ${
                      !unlocked ? 'opacity-35' : 'opacity-100'
                    }`}
                  >
                    {/* Header: number + category + status */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-3xl md:text-4xl font-bold tabular-nums leading-none transition-colors duration-500 ${
                            completed
                              ? 'text-orange-400'
                              : unlocked
                                ? 'text-white'
                                : 'text-white/40'
                          }`}
                        >
                          {step.number}
                        </span>
                        <span
                          className={`text-[10px] font-mono uppercase tracking-[0.15em] px-3 py-1 rounded-full border transition-all duration-500 ${
                            completed
                              ? 'border-orange-500/30 text-orange-400 bg-orange-500/10'
                              : unlocked
                                ? 'border-white/10 text-white/40'
                                : 'border-white/[0.06] text-white/20'
                          }`}
                        >
                          {t(`freemium.${step.key}.category`)}
                        </span>
                      </div>

                      {/* Status badge */}
                      <AnimatePresence mode="wait">
                        {completed ? (
                          <motion.div
                            key="done"
                            initial={
                              wasJustCompleted ? { scale: 0, rotate: -90 } : false
                            }
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                              type: 'spring',
                              stiffness: 300,
                              damping: 20,
                            }}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20"
                          >
                            <CheckCircle2 size={14} className="text-emerald-400" />
                            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                              {t('freemium.downloaded')}
                            </span>
                          </motion.div>
                        ) : !unlocked ? (
                          <motion.div
                            key="locked"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06]"
                            animate={
                              isBeingUnlocked
                                ? {
                                    scale: [1, 1.1, 1],
                                    borderColor: [
                                      'rgba(255,255,255,0.06)',
                                      'rgba(249,115,22,0.4)',
                                      'rgba(255,255,255,0.08)',
                                    ],
                                  }
                                : {}
                            }
                            transition={{ duration: 0.8 }}
                          >
                            <motion.div
                              animate={
                                isBeingUnlocked
                                  ? {
                                      rotate: [0, -20, 20, -10, 10, 0],
                                      scale: [1, 0.8, 1.2, 1],
                                    }
                                  : {
                                      rotate: [0, -6, 6, -6, 0],
                                    }
                              }
                              transition={
                                isBeingUnlocked
                                  ? { duration: 0.7 }
                                  : {
                                      duration: 0.4,
                                      repeat: Infinity,
                                      repeatDelay: 5,
                                    }
                              }
                            >
                              <Lock size={12} className="text-white/30" />
                            </motion.div>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-white/30">
                              {t(`freemium.${step.key}.statusLocked`)}
                            </span>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-lg md:text-xl font-semibold mb-2 transition-colors duration-500 ${
                        completed
                          ? 'text-white'
                          : unlocked
                            ? 'text-white/90'
                            : 'text-white/40'
                      }`}
                    >
                      {t(`freemium.${step.key}.title`)}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-sm leading-relaxed mb-6 transition-colors duration-500 ${
                        unlocked ? 'text-white/40' : 'text-white/20'
                      }`}
                    >
                      {t(`freemium.${step.key}.description`)}
                    </p>

                    {/* Action button */}
                    {unlocked && (
                      <motion.button
                        onClick={() => handleDownload(step.key, step.fileIndex)}
                        className={`group inline-flex items-center gap-2.5 font-medium px-5 py-2.5 rounded-xl transition-all duration-300 text-sm ${
                          completed
                            ? 'bg-white/[0.04] text-white/40 hover:bg-white/[0.08] hover:text-white/60'
                            : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 hover:brightness-110'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Download
                          size={16}
                          className={!completed ? 'group-hover:animate-bounce' : ''}
                        />
                        {t(`freemium.${step.key}.status`)}
                      </motion.button>
                    )}
                  </div>

                  {/* Lock overlay for locked cards */}
                  <AnimatePresence>
                    {!unlocked && (
                      <motion.div
                        key="lock-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{
                          opacity: 0,
                          scale: 0.85,
                          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                        }}
                        className="absolute inset-0 rounded-2xl flex items-center justify-center bg-black/60 backdrop-blur-[2px]"
                      >
                        <motion.div
                          className="relative flex flex-col items-center gap-4"
                          animate={!isBeingUnlocked ? { y: [0, -3, 0] } : {}}
                          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <motion.div
                            className="relative w-16 h-16 rounded-2xl bg-zinc-900/90 border border-white/[0.1] flex items-center justify-center shadow-xl"
                            animate={
                              isBeingUnlocked
                                ? {
                                    scale: [1, 1.4, 0],
                                    rotate: [0, 20, -20],
                                    opacity: [1, 1, 0],
                                  }
                                : {
                                    boxShadow: [
                                      '0 0 0 0 rgba(249,115,22,0)',
                                      '0 0 20px 0 rgba(249,115,22,0.08)',
                                      '0 0 0 0 rgba(249,115,22,0)',
                                    ],
                                  }
                            }
                            transition={
                              isBeingUnlocked
                                ? { duration: 0.8, ease: 'easeOut' }
                                : { duration: 3, repeat: Infinity, repeatDelay: 2 }
                            }
                          >
                            {/* Minimal orbit ring inspired by WhyMe visuals */}
                            <motion.div
                              className="absolute -inset-2 rounded-2xl border border-orange-400/20"
                              animate={!isBeingUnlocked ? { rotate: 360 } : {}}
                              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                            >
                              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-orange-400/70" />
                              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-300/70" />
                            </motion.div>
                            <Lock size={24} className="text-orange-400/60" />
                          </motion.div>
                          <div className="relative overflow-hidden bg-zinc-900/90 border border-white/[0.08] rounded-full px-4 py-1.5 shadow-lg">
                            <span className="relative z-10 text-[11px] font-mono uppercase tracking-[0.12em] text-white/50">
                              {t(`freemium.${step.key}.statusLocked`)}
                            </span>
                            <motion.div
                              className="absolute top-0 -left-10 h-full w-8 bg-gradient-to-r from-transparent via-orange-300/20 to-transparent"
                              animate={!isBeingUnlocked ? { left: ['-20%', '120%'] } : {}}
                              transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.8, ease: 'easeInOut' }}
                            />
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Connector to final CTA */}
        <div className="flex justify-center my-10">
          <motion.div
            className={`w-px h-14 transition-colors duration-1000 ${
              allComplete
                ? 'bg-gradient-to-b from-orange-500/30 to-orange-500/0'
                : 'bg-gradient-to-b from-white/[0.04] to-transparent'
            }`}
          />
        </div>

        {/* ── Final CTA section ──────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <motion.div
            className={`relative rounded-3xl border overflow-hidden transition-all duration-1000 ${
              allComplete
                ? 'bg-gradient-to-br from-orange-500/[0.08] via-amber-500/[0.05] to-orange-500/[0.08] border-orange-500/20'
                : 'bg-white/[0.02] border-white/[0.06]'
            }`}
            animate={
              allComplete
                ? {
                    boxShadow: [
                      '0 0 30px 0 rgba(249,115,22,0)',
                      '0 0 60px 0 rgba(249,115,22,0.12)',
                      '0 0 30px 0 rgba(249,115,22,0)',
                    ],
                  }
                : {}
            }
            transition={{ duration: 4, repeat: Infinity }}
          >
            {/* Content always visible */}
            <div className={`relative p-8 md:p-14 text-center transition-opacity duration-700 ${allComplete ? 'opacity-100' : 'opacity-40'}`}>
              <motion.div
                className={`inline-flex items-center gap-2 mb-8 ${allComplete ? 'text-orange-400/80' : 'text-orange-400/40'}`}
                animate={allComplete ? { y: [0, -4, 0] } : {}}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Sparkles size={18} />
                <span className="text-xs font-mono uppercase tracking-[0.2em]">
                  {t('freemium.finalTitle')}
                </span>
                <Sparkles size={18} />
              </motion.div>

              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {t('freemium.finalDescription')}
              </h2>

              {allComplete ? (
                <motion.a
                  initial={showFinalReveal ? { opacity: 0, scale: 0.9, y: 20 } : false}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
              ) : (
                <div className="inline-flex items-center gap-3 bg-white/[0.04] text-white/30 font-bold px-8 py-4 rounded-2xl text-base md:text-lg mt-8 cursor-default select-none">
                  {t('freemium.finalCta')}
                  <ArrowRight size={20} />
                </div>
              )}
            </div>

            {/* Lock overlay when not all complete */}
            <AnimatePresence>
              {!allComplete && (
                <motion.div
                  key="final-lock"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.6 } }}
                  className="absolute inset-0 rounded-3xl flex items-end justify-center pb-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                >
                  <div className="flex items-center gap-2.5 bg-zinc-900/90 border border-white/[0.08] rounded-full px-4 py-2 shadow-lg">
                    <motion.div
                      animate={{
                        rotate: [0, -5, 5, -5, 0],
                      }}
                      transition={{
                        duration: 0.4,
                        repeat: Infinity,
                        repeatDelay: 5,
                      }}
                    >
                      <Lock size={14} className="text-orange-400/60" />
                    </motion.div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-white/50">
                      {t('freemium.finalLocked')}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ── Bottom spacer ──────────────────────────────────────── */}
      <div className="h-32" />
    </div>
  );
};
