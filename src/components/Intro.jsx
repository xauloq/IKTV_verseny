import React from 'react';
import './Intro.css';
import ScrollButton from './ScrollButton';

const Intro = () => {
    return (
        <section id="intro" className="intro-section">
            <div className="intro-container">
                <br></br>
                <h1>Bold Agro Kft. - Az alma betakarítás jövője</h1>
                <br></br>
                <hr></hr>
                <br></br>
                <h3>Hogyan használja a Bold Agro Kft. a mesterséges intelligenciát az almáskertek optimalizálására?</h3>
                <h3>Hogyan segíti az MI a hatékonyság és fenntarthatóság növelését Derecskén?</h3>
                <br></br>
                <hr></hr>
                <ScrollButton targetId="termesfelism">Tovább a tartalomhoz</ScrollButton>
            </div>
        </section>
    );
};

export default Intro;
