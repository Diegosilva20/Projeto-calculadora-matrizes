import CookieConsent from "react-cookie-consent";

const CookieConsentWrapper = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceitar"
      declineButtonText="Recusar"
      cookieName="matrizesCookieConsent"
      enableDeclineButton={true}
      style={{
        background: "#ffffff",
        color: "#333333",
        fontFamily: "'Arial', sans-serif",
        padding: "10px 20px",
        borderTop: "1px solid #e5e7eb",
        textAlign: "center",
        fontSize: "14px",
      }}
      buttonStyle={{
        background: "#4b5563",
        color: "#ffffff",
        padding: "5px 15px",
        borderRadius: "4px",
        border: "none",
        marginLeft: "10px",
        fontWeight: "500",
      }}
      declineButtonStyle={{
        background: "#f3f4f6",
        color: "#4b5563",
        padding: "5px 15px",
        borderRadius: "4px",
        border: "none",
        marginLeft: "10px",
        fontWeight: "500",
      }}
      contentStyle={{ display: "inline" }}
      expires={365}
    >
      Usamos cookies para melhorar sua experiência. 
      <a href="/politica" style={{ color: "#4b5563", textDecoration: "underline", marginLeft: "5px" }}>
        Saiba mais
      </a>.
    </CookieConsent>
  );
};

export default CookieConsentWrapper;