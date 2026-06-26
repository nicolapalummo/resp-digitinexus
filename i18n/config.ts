import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locales/en.json';
import itTranslations from './locales/it.json';

// Language is authoritative from the URL: "/en" (and "/en/...") is English,
// everything else is Italian. This makes the first paint match the URL (no flash)
// and keeps SEO coherent. SPA navigation is kept in sync by LocaleManager.
const initialLng =
  typeof window !== 'undefined' &&
  (window.location.pathname === '/en' || window.location.pathname.startsWith('/en/'))
    ? 'en'
    : 'it';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    it: { translation: itTranslations },
  },
  supportedLngs: ['en', 'it'],
  lng: initialLng,
  fallbackLng: 'it', // Default to Italian
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
