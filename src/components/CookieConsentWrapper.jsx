// src/components/CookieConsentWrapper.jsx
import { Link } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

const CookieConsentWrapper = () => (
  <CookieConsent
    location="bottom"
    buttonText="Aceitar"
    declineButtonText="Recusar"
    cookieName="matrizesMaisConsent"
    style={{ background: "#2B373B" }}
    buttonStyle={{ color: "#fff", background: "#4e503b" }}
    expires={150}
    enableDeclineButton
    onAccept={() => {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }}
  >
    Este site usa cookies para melhorar sua experiência e exibir anúncios
    personalizados via Google AdSense.{" "}
    <Link to="/politica" className="text-blue-400 hover:underline">
      Saiba mais
    </Link>
  </CookieConsent>
);

export default CookieConsentWrapper;