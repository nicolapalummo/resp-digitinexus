import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './locales/en.json';
import itTranslations from './locales/it.json';
import frTranslations from './locales/fr.json';

// Function to detect language based on IP geolocation
const detectLanguageFromIP = async (): Promise<string> => {
  // Check if language is already saved in localStorage
  const savedLanguage = localStorage.getItem('i18nextLng');
  if (savedLanguage) {
    return savedLanguage;
  }

  try {
    // Use a free IP geolocation service
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    const countryCode = data.country_code;
    
    // Map country codes to languages
    if (countryCode === 'IT') {
      return 'it';
    } else if (countryCode === 'FR') {
      return 'fr';
    } else {
      return 'en';
    }
  } catch (error) {
    console.error('Error detecting language from IP:', error);
    // Fallback to browser language or default to English
    const browserLang = navigator.language.split('-')[0];
    return ['it', 'fr'].includes(browserLang) ? browserLang : 'en';
  }
};

// Initialize i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      it: { translation: itTranslations },
      fr: { translation: frTranslations },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  });

// Detect language from IP if not already set
const initLanguageFromIP = async () => {
  const savedLanguage = localStorage.getItem('i18nextLng');
  if (savedLanguage) {
    return; // Language already set by user
  }

  try {
    const detectedLang = await detectLanguageFromIP();
    if (detectedLang && detectedLang !== i18n.language) {
      i18n.changeLanguage(detectedLang);
    }
  } catch (error) {
    console.error('Error detecting language from IP:', error);
  }
};

// Run IP detection after initialization
initLanguageFromIP();

export default i18n;

