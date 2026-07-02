import React, { useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { Mail, Video, CalendarCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { langFromPath } from '../lib/i18nRouting';

// Post-booking "thank you" page (/confirmation, /en/confirmation). Not indexed.
// Reads Calendly redirect URL params (when "Pass event details" is enabled) to
// personalize the greeting and show the appointment date/time.
export const Confirmation: React.FC = () => {
  const { t } = useTranslation();
  const en = langFromPath(useLocation().pathname) === 'en';
  const [params] = useSearchParams();

  useEffect(() => {
    const prevTitle = document.title;
    document.title = en ? 'Booking confirmed | DigitiNexus' : 'Prenotazione confermata | DigitiNexus';
    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const prev = robots?.getAttribute('content') ?? null;
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, nofollow');
    window.scrollTo(0, 0);
    return () => {
      document.title = prevTitle;
      robots!.setAttribute('content', prev ?? 'index, follow');
    };
  }, [en]);

  // ── Calendly params (all optional) ──────────────────────────────────────────
  const firstName = (params.get('invitee_first_name') || '').trim().slice(0, 40);
  const eventName = (params.get('event_type_name') || '').trim().slice(0, 80);
  const startRaw = params.get('event_start_time');
  let startFormatted: string | null = null;
  if (startRaw) {
    const d = new Date(startRaw);
    if (!isNaN(d.getTime())) {
      const s = d.toLocaleString(en ? 'en-US' : 'it-IT', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
      });
      startFormatted = s.charAt(0).toUpperCase() + s.slice(1);
    }
  }

  const title = firstName ? t('confirmation.titleNamed', { name: firstName }) : t('confirmation.title');

  const steps = [
    { icon: Mail, text: t('confirmation.step1') },
    { icon: Video, text: t('confirmation.step3') },
  ];

  const fade: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white px-6 pt-32 pb-20 md:pt-36 md:pb-24">
      {/* soft orange glow */}
      <div className="pointer-events-none absolute -top-1/4 right-0 h-[520px] w-[520px] rounded-full bg-orange-500/20 blur-[130px]" />

      <div className="relative mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Illustration — top on mobile, right on desktop */}
        <motion.div
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="order-1 mx-auto w-full max-w-[420px] overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] md:order-2"
        >
          <img
            src="/confirmation-illustration.webp"
            alt={en ? 'Booking confirmed illustration' : 'Illustrazione prenotazione confermata'}
            width={1000}
            height={667}
            className="h-auto w-full"
          />
        </motion.div>

        {/* Text — below on mobile, left on desktop */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <motion.div
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-orange-300"
          >
            {t('confirmation.badge')}
          </motion.div>

          <motion.h1
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mb-4 text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            {title}
          </motion.h1>

          <motion.p
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mb-8 text-base leading-relaxed text-white/60 sm:text-lg"
          >
            {t('confirmation.subtitle')}
          </motion.p>

          {/* appointment details (only if Calendly passed them) */}
          {startFormatted && (
            <motion.div
              custom={3}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mb-6 flex items-start gap-3 rounded-2xl border border-orange-500/20 bg-orange-500/[0.06] p-5 text-left"
            >
              <CalendarCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-400" />
              <div>
                <p className="mb-1 text-xs font-mono uppercase tracking-wider text-orange-300/80">
                  {t('confirmation.appointmentLabel')}
                </p>
                <p className="font-medium text-white">{startFormatted}</p>
                {eventName && <p className="mt-1 text-sm text-white/60">{eventName}</p>}
              </div>
            </motion.div>
          )}

          {/* email note */}
          <motion.div
            custom={4}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mb-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left"
          >
            <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-400" />
            <p className="text-sm text-white/70">{t('confirmation.emailNote')}</p>
          </motion.div>

          {/* what happens next */}
          <motion.div
            custom={5}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mb-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-left"
          >
            <p className="mb-4 text-xs font-mono uppercase tracking-wider text-white/40">
              {t('confirmation.nextTitle')}
            </p>
            <ul className="space-y-4">
              {steps.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
                    <s.icon className="h-4 w-4" />
                  </span>
                  <span className="pt-1 text-sm leading-relaxed text-white/70">{s.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div custom={6} variants={fade} initial="hidden" animate="show">
            <Link
              to={en ? '/en' : '/'}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 font-medium text-black transition-transform duration-300 hover:scale-105"
            >
              {t('confirmation.cta')}
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
};
