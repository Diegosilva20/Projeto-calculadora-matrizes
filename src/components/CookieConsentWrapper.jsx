import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";

const CookieConsentWrapper = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceitar"
      declineButtonText="Recusar"
      cookieName="matrizesCookieConsent"
      enableDeclineButton={true}
      disableStyles
      containerClasses="fixed inset-x-3 bottom-3 z-[60] mx-auto flex max-w-xl flex-col gap-3 rounded-xl border border-slate-200 bg-white/95 p-3 text-slate-700 shadow-xl shadow-slate-900/10 backdrop-blur sm:inset-x-auto sm:right-4 sm:left-auto sm:w-[min(32rem,calc(100vw-2rem))] sm:p-4"
      contentClasses="text-center text-xs leading-relaxed sm:text-left sm:text-sm"
      buttonWrapperClasses="flex flex-wrap justify-center gap-2 sm:justify-end"
      buttonClasses="min-w-24 rounded-lg bg-slate-800 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 sm:text-sm"
      declineButtonClasses="min-w-24 rounded-lg bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 sm:text-sm"
      expires={365}
    >
      Usamos cookies para melhorar sua experiência.
      <Link
        to="/politica-privacidade"
        className="ml-1 font-semibold text-slate-700 underline underline-offset-2 hover:text-blue-700"
      >
        Saiba mais
      </Link>.
    </CookieConsent>
  );
};

export default CookieConsentWrapper;
