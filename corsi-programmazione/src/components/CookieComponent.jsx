import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import './CookieConsent.css';

const CookieComponent = () => {
  const [cookieValue, setCookieValue] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Verifica se l'utente ha già acconsentito ai cookie
    const consent = Cookies.get('authToken');
    if (!consent) {
      setShowPopup(true);
      setCookieValue(consent);
    }
  }, []);

  const acceptCookies = () => {
    // Imposta il cookie di consenso
    const token = localStorage.getItem('token');
    Cookies.set('authToken', token, { expires: 2, path: '/' });
    alert('Cookie impostato!');
    console.log(cookieValue);
    setShowPopup(false);
  };

  const dontAcceptCookie = () => {
    alert('Cookie non impostato!');
    console.log(cookieValue);
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <>
      <div className="cookie-consent-popup">
        <div className="cookie-consent-content">
          <p>Questo sito utilizza i cookie per migliorare la tua esperienza, Accetti?</p>
          <button className="btn" onClick={acceptCookies}>Accetto</button>
          <button className="btn" onClick={dontAcceptCookie}>Avanti</button>
        </div>
      </div>
    </>
  );
};

export default CookieComponent;
