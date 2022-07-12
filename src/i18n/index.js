import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import de from '@/i18n/locales/de'
import en from '@/i18n/locales/en'
import fr from '@/i18n/locales/fr'
import jp from '@/i18n/locales/jp'
import ko from '@/i18n/locales/ko'

const resources = {
  de, // en: { translation: de },
  en, // en: { translation: en },
  fr, // fr: { translation: fr },
  jp, // jp: { translation: jp },
  ko, // ko: { translation: ko },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ko',
    fallbackLng: 'ko',
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
