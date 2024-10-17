import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import './Section.css';

function Section(props) {
    const [imgSrc, setImgSrc] = useState(props.emberImgSrc);
    const [isMiLayout, setIsMiLayout] = useState(false);
    const [activeText, setActiveText] = useState('');

    useEffect(() => {
        const preloadImages = (srcArray) => {
            srcArray.forEach((src) => {
                const img = new Image();
                img.src = src;
            });
        };

        preloadImages([props.emberImgSrc, props.miImgSrc]);
    }, [props.emberImgSrc, props.miImgSrc]);

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
        <section className="container sectionCont card mt-4">
            <h2>{props.secCim}</h2>
            <div className="row">
                <div className={`col-md-6 text-center ${activeText === 'ember' ? 'active' : ''}`} onClick={handleEmberClick}>
                    <h3>Ember</h3>
                </div>
                <div className={`col-md-6 text-center ${activeText === 'mi' ? 'active' : ''}`} onClick={handleMiClick}>
                    <h3>Mi</h3>
                </div>
            </div>
            <div className={`row ${isMiLayout ? 'mi-layout' : 'ember-layout'}`}>
                {isMiLayout ? (
                    <>
                        <div className="col-md-6">
                            <p>{props.miText}</p>
                        </div>
                        <div className="col-md-6">
                            <img src={imgSrc} alt=""/>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="col-md-6">
                            <img src={imgSrc} alt=""/>
                        </div>
                        <div className="col-md-6">
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
    secCim: PropTypes.string.isRequired,
    emberImgSrc: PropTypes.string.isRequired,
    miImgSrc: PropTypes.string.isRequired,
    emberText: PropTypes.string.isRequired,
    miText: PropTypes.string.isRequired,
};

export default Section;