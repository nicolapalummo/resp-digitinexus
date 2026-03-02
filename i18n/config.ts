import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './locales/en.json';
import itTranslations from './locales/it.json';

// Initialize i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      it: { translation: itTranslations },
    },
    supportedLngs: ['en', 'it'],
    fallbackLng: 'it', // Default to Italian
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage'], // Only check localStorage for user's previous choice
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  });

export default i18n;
