import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <span id="ourfooter">
            <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <h2>Rólunk</h2>
                    <p>10. évfolyamos tanulók vagyunk, szabadidőnket szívesen fordítjuk a modern világban fontosnak tartható képességek elsajátítására.</p>
                </div>
                <div className="footer-section">
                    <h2>Elérhetőség:</h2>
                    <p> <a href="mailto: xauloq@gmail.com">E-mail</a> </p>
                </div>
                <div className="footer-section">
                    <h2>Quick Links</h2>
                    <ul className="ListBottom">
                        <li><a href="#termesfelism">Termés Felismerés </a></li>
                        <li><a href="#szureteles">Szüretelés </a></li>
                        <li><a href="#logisztika">Logisztika </a></li>
                        <li><a href="#koltsegek">Költségek </a></li>
                        <li><a href="#adaptacio">Adaptáció </a></li>
                        <li><a href="#etikaikerdesek">Etikai Kérdések </a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 SeedIT. "Minden jog fenntartva".</p>
                <a href="#top">Vissza az oldal elejére</a>
            </div>
        </footer>
        </span>
)
    ;
};

export default Footer;