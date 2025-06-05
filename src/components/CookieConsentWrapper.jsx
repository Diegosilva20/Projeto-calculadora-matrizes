import CookieConsent from "react-cookie-consent";

const CookieConsentWrapper = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceitar"
      cookieName="matrizesCookieConsent"
      style={{
        background: "#1e40af", // Azul escuro moderno
        color: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
        padding: "15px 30px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
      buttonStyle={{
        background: "#facc15", // Amarelo vibrante
        color: "#1e40af",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        fontWeight: "600",
        cursor: "pointer",
        transition: "background 0.3s",
      }}
      buttonClasses="hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      contentStyle={{ flex: "1 0 auto" }}
      expires={365}
    >
      <span style={{ fontSize: "16px" }}>
        🍪 Queremos melhorar sua experiência! Usamos cookies para personalizar anúncios e analisar o tráfego. 
        <a href="/politica" style={{ color: "#facc15", textDecoration: "underline", marginLeft: "5px" }}>
          Saiba mais
        </a>.
      </span>
    </CookieConsent>
  );
};

export default CookieConsentWrapper;