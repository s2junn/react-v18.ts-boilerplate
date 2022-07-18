import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      addPath: '/locales/add/{{lng}}/{{ns}}',
    },
    lng: 'ko',
    fallbackLng: 'ko',
    whitelist: ['de', 'en', 'fr', 'ja', 'ko'],
    ns: ['translations'],
    defaultNS: 'translations',
    debug: true,
    keySeparator: false,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    // react i18next special options (optional)
    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
    },
  })

export default i18n
