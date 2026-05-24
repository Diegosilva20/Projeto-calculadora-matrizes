import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaBars,
  FaCalculator,
  FaGlobe,
  FaMoon,
  FaSun,
  FaTimes,
} from "react-icons/fa";
import { useI18n } from "../../i18n/LanguageContext";

const navItems = [
  { to: "/tutorials", labelKey: "nav.tutorials" },
  { to: "/sobre", labelKey: "nav.about" },
  { to: "/contato", labelKey: "nav.contact" },
];

function Header({ isDarkMode, onToggleTheme }) {
  const { language, languages, setLanguage, t } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalculatorClicked, setIsCalculatorClicked] = useState(false);
  const clickTimeoutRef = useRef(null);
  const { pathname } = useLocation();

  const handleCalculatorClick = () => {
    setIsMenuOpen(false);
    setIsCalculatorClicked(true);
    window.clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = window.setTimeout(() => {
      setIsCalculatorClicked(false);
    }, 350);

    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    return () => window.clearTimeout(clickTimeoutRef.current);
  }, []);

  const linkClasses = ({ isActive }) =>
    [
      "block rounded-full px-4 py-2 text-sm font-semibold text-white/90",
      "transition-all duration-200 hover:bg-white/10 hover:text-white",
      "focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-blue-600",
      isActive ? "bg-white/15 text-white shadow-sm ring-1 ring-white/20" : "",
    ].join(" ");

  const themeToggleLabel = isDarkMode
    ? t("header.activateLight")
    : t("header.activateDark");

  const renderLanguageSelect = () => (
    <label className="relative inline-flex h-10 items-center gap-2 rounded-full bg-white/10 px-3 text-white transition-colors hover:bg-white/20 focus-within:ring-2 focus-within:ring-white/70 focus-within:ring-offset-2 focus-within:ring-offset-blue-600">
      <FaGlobe className="h-4 w-4 flex-none" aria-hidden="true" />
      <span className="sr-only">{t("language.select")}</span>
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value)}
        aria-label={t("language.select")}
        title={t("language.select")}
        className="h-full cursor-pointer appearance-none bg-transparent pr-1 text-xs font-bold uppercase text-white outline-none"
      >
        {languages.map((item) => (
          <option key={item.code} value={item.code} className="text-slate-900">
            {item.shortLabel}
          </option>
        ))}
      </select>
    </label>
  );

  const renderThemeToggle = () => (
    <button
      type="button"
      onClick={onToggleTheme}
      aria-label={themeToggleLabel}
      title={themeToggleLabel}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-blue-600"
    >
      {isDarkMode ? (
        <FaSun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <FaMoon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-blue-700/70 bg-blue-600 text-white shadow-md shadow-blue-950/10 transition-colors dark:border-slate-700 dark:bg-slate-950">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          to="/"
          className={[
            "inline-flex items-center gap-3 rounded-full px-2 py-1",
            "transition-all duration-200 hover:bg-white/10 active:scale-[0.98]",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600",
            isCalculatorClicked ? "scale-[0.98] bg-white/15 shadow-inner" : "",
          ].join(" ")}
          aria-label={t("header.homeAria")}
          onClick={handleCalculatorClick}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm dark:bg-slate-100 dark:text-blue-700">
            <FaCalculator className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-extrabold tracking-tight sm:text-xl">
            {t("header.calculator")}
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <nav
            className="flex items-center gap-2"
            aria-label={t("header.mainNav")}
          >
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClasses}>
                {t(item.labelKey)}
              </NavLink>
            ))}
          </nav>
          {renderLanguageSelect()}
          {renderThemeToggle()}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {renderLanguageSelect()}
          {renderThemeToggle()}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={
              isMenuOpen ? t("header.closeMenu") : t("header.openMenu")
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-blue-600"
          >
            {isMenuOpen ? (
              <FaTimes className="h-5 w-5" aria-hidden="true" />
            ) : (
              <FaBars className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-white/10 bg-blue-700 px-4 py-3 shadow-lg transition-colors md:hidden dark:bg-slate-900"
          aria-label={t("header.mobileNav")}
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="container mx-auto grid gap-2">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClasses}>
                {t(item.labelKey)}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
