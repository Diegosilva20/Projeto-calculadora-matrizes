import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  defaultLanguage,
  getBrowserLanguage,
  normalizeLanguage,
  supportedLanguages,
  translate,
} from "./index";

const LanguageContext = createContext(null);

export const LanguageProvider = ({
  children,
  initialLanguage = defaultLanguage,
}) => {
  const [language, setLanguageState] = useState(() => {
    if (typeof window === "undefined") return normalizeLanguage(initialLanguage);
    return getBrowserLanguage();
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }

    if (typeof window !== "undefined") {
      window.localStorage.setItem("language", language);
    }
  }, [language]);

  const setLanguage = useCallback((nextLanguage) => {
    setLanguageState(normalizeLanguage(nextLanguage));
  }, []);

  const t = useCallback(
    (key, params) => translate(language, key, params),
    [language],
  );

  const value = useMemo(
    () => ({
      language,
      languages: supportedLanguages,
      setLanguage,
      t,
    }),
    [language, setLanguage, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useI18n must be used inside LanguageProvider");
  }

  return context;
};
