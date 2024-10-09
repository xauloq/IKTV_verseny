import PropTypes from "prop-types";
import { useState } from "react";
import './Section.css';

function Section(props) {
    const [imgSrc, setImgSrc] = useState(props.emberImgSrc);
    const [isMiLayout, setIsMiLayout] = useState(false);
    const [activeText, setActiveText] = useState('');

    const handleEmberClick = () => {
        setImgSrc(props.emberImgSrc);
        setIsMiLayout(false);
        setActiveText('ember');
    };

    const handleMiClick = () => {
        setImgSrc(props.miImgSrc);
        setIsMiLayout(true);
        setActiveText('mi');
    };

    return (
        <section className="container card mt-4">
            <h2>{props.secCim}</h2>
            <div className="row">
                <div className={`col-6 text-center ${activeText === 'ember' ? 'active' : ''}`} onClick={handleEmberClick}>
                    <h3>Ember</h3>
                </div>
                <div className={`col-6 text-center ${activeText === 'mi' ? 'active' : ''}`} onClick={handleMiClick}>
                    <h2>{props.miCim}</h2>
                    <h3>Mi</h3>
                </div>
            </div>
            <div className={`row ${isMiLayout ? 'mi-layout' : 'ember-layout'}`}>
                {isMiLayout ? (
                    <>
                        <div className="col-4">
                            <p>{props.miText}</p>
                        </div>
                        <div className="col-8">
                            <img src={imgSrc} alt=""/>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="col-8">
                            <img src={imgSrc} alt=""/>
                        </div>
                        <div className="col-4">
                            <p>{props.emberText}</p>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

Section.propTypes = {
    emberCim: PropTypes.string.isRequired,
    miCim: PropTypes.string.isRequired,
    emberImgSrc: PropTypes.string.isRequired,
    miImgSrc: PropTypes.string.isRequired,
    emberText: PropTypes.string.isRequired,
    miText: PropTypes.string.isRequired,
};

export default Section;