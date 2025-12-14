import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    debug: true, // TODO: set to false in production

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    
    // keySeparator: false, // we do not use keys in form messages.welcome
    // nsSeparator: false
  });

export default i18n;
