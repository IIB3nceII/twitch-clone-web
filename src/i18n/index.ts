import { createI18n } from "vue-i18n";
import en from "./en";
import hu from "./hu";

const i18n = createI18n({
  locale: "en",
  messages: { en, hu },
});

export default i18n;
