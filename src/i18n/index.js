import {
  defaultLanguage,
  supportedLanguages,
  translations,
} from "./translations";

const languageCodes = supportedLanguages.map((language) => language.code);

export const normalizeLanguage = (language) => {
  if (languageCodes.includes(language)) return language;
  if (typeof language === "string") {
    if (language.toLowerCase().startsWith("pt")) return "pt-BR";
    if (language.toLowerCase().startsWith("es")) return "es";
    if (language.toLowerCase().startsWith("en")) return "en";
  }
  return defaultLanguage;
};

export const getBrowserLanguage = () => {
  if (typeof window === "undefined") return defaultLanguage;

  const savedLanguage = window.localStorage.getItem("language");
  if (savedLanguage) return normalizeLanguage(savedLanguage);

  return normalizeLanguage(window.navigator.language);
};

const getNestedValue = (source, key) =>
  key.split(".").reduce((value, part) => value?.[part], source);

const interpolate = (template, params = {}) =>
  template.replace(/\{\{(\w+)\}\}/g, (_, paramName) => {
    const value = params[paramName];
    return value === undefined || value === null ? "" : String(value);
  });

export const translate = (language, key, params) => {
  const normalizedLanguage = normalizeLanguage(language);
  const value =
    getNestedValue(translations[normalizedLanguage], key) ??
    getNestedValue(translations[defaultLanguage], key);

  if (typeof value === "string") {
    return interpolate(value, params);
  }

  return value ?? key;
};

export { defaultLanguage, supportedLanguages };
