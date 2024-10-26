import React from 'react';
import './Intro.css';
import ScrollButton from './ScrollButton';

const Intro = () => {
    return (
        <section id="intro" className="intro-section">
            <div className="intro-container">
                <br></br>
                <h1>Okos kertek: Az alma betakarítás jövője</h1>
                <br></br>
                <hr></hr>
                <br></br>
                <h3>Mire tudnánk felhasználni a mesterséges intelligencia erejét az almáskertek optimalizálására?</h3>
                <h3>Hogyan lehetne a hatékonyságot akár többszörösére növelni?</h3>
                <br></br>
                <hr></hr>
                <ScrollButton targetId="termesfelism">Tovább a tartalomhoz</ScrollButton>
            </div>
        </section>
    );
};

export default Intro;