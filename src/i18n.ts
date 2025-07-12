import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // Load translation files dynamically
  .use(LanguageDetector) // Detect and save language preferences
  .use(initReactI18next) // Bind react-i18next to i18next
  .init({
    fallbackLng: 'en', // Default language
    lng: 'en', // Initial language
    backend: {
      loadPath: '/locales/{{lng}}.json', // Path to your translation files
    },
    detection: {
      order: ['localStorage', 'cookie'], // Detection order
      caches: ['localStorage'], // Save detected language
    },
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
  });

export default i18n;
