import i18next from "i18next";
import { english } from "./english";
import { polish } from "./polish";

// const english = require('./english');
// const polish = require('./polish');

i18next.init({
  lng: localStorage.getItem("lang") || "pl",
  fallbackLng: ["en", "pl"],
  debug: true,
  resources: {
    en: { translation: english },
    pl: { translation: polish },
  },
});

export { i18next };

// Add this line to your app entrypoint. Usually it is src/index.js
// import './i18n/init';
