import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import each language's translation namespaces here as you build them.
// For now, just an empty "common" namespace per language to prove the
// wiring works — real page content gets added page by page.
import enCommon from "./locales/en/common.json";
import esCommon from "./locales/es/common.json";
import frCommon from "./locales/fr/common.json";
import arCommon from "./locales/ar/common.json";
import zhCommon from "./locales/zh/common.json";

// Page-specific namespaces are added alongside "common" as each page
// gets translated — keeps common.json scoped to truly shared UI strings.
import enHome from "./locales/en/home.json";
import esHome from "./locales/es/home.json";
import frHome from "./locales/fr/home.json";
import enAbout from "./locales/en/about.json";
import esAbout from "./locales/es/about.json";
import frAbout from "./locales/fr/about.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enCommon, home: enHome, about: enAbout },
       es: { common: esCommon, home: esHome, about: esAbout },
  fr: { common: frCommon, home: frHome, about: frAbout },
      ar: { common: arCommon },
      zh: { common: zhCommon },
    },
    fallbackLng: "en", // if a key is missing in the active language, show English rather than a blank
    defaultNS: "common",
    interpolation: {
      escapeValue: false, // React already escapes output, so i18next doesn't need to do it again
    },
  });

export default i18n;
