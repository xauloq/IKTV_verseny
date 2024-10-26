import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <span id="ourfooter">
            <footer>
                <div className="footer-container">
                    <div className="footer-section col-md-4">
                        <h2>Rólunk</h2>
                        <p>Mi 10. évfolyamos diákok vagyunk, akik szívesen szentelik szabadidejüket a digitális világban nélkülözhetetlen képességek elsajátítására. Célunk, hogy tudásunkkal hozzájáruljunk egy fenntartható jövőhöz, különös tekintettel az agráriparra.</p>
                    </div>
                    <div className="footer-section col-md-4">
                        <h2>Elérhetőségek</h2>
                        <p className="text-center">
                            <a href="mailto:xauloq@gmail.com">E-mail küldése</a>
                        </p>
                    </div>
                    <div className="footer-section col-md-4">
                        <h2>Gyorslinkek</h2>
                        <ul className="ListBottom">
                            <li><a href="#termesfelism">Termés felismerése</a></li>
                            <li><a href="#szureteles">Szüretelési módszerek</a></li>
                            <li><a href="#logisztika">Logisztikai megoldások</a></li>
                            <li><a href="#koltsegek">Költségoptimalizálás</a></li>
                            <li><a href="#adaptacio">Technológiai adaptáció</a></li>
                            <li><a href="#etikaikerdesek">Etikai kérdések</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 SeedIT. Minden jog fenntartva.</p>
                    <a href="#top">Vissza az oldal tetejére</a>
                </div>
            </footer>
        </span>
    );
};

export default Footer;
