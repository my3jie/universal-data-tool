import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import enTranslation from "./locales/en/translation.json"
import cnTranslation from "./locales/cn/translations.json"

import LanguageDetector from "i18next-browser-languagedetector"
// not like to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "cn",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    resources: {
      en: {
        translation: enTranslation,
      },
      cn: {
        translation: cnTranslation,
      },
    },
  })

export default i18n