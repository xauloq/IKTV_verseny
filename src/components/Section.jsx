import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import './Section.css';

function Section({ secCim, emberImgSrc, miImgSrc, emberText, miText }) {
    const [imgSrc, setImgSrc] = useState(emberImgSrc);
    const [isMiLayout, setIsMiLayout] = useState(false);
    const [activeText, setActiveText] = useState('');

    useEffect(() => {
        [emberImgSrc, miImgSrc].forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, [emberImgSrc, miImgSrc]);

    const handleClick = (isMi) => {
        setImgSrc(isMi ? miImgSrc : emberImgSrc);
        setIsMiLayout(isMi);
        setActiveText(isMi ? 'mi' : 'ember');
    };

    return (
        <section className="container sectionCont card mt-4">
            <h2>{secCim}</h2>
            <div className="row">
                <div className={`col-md-6 text-center ${activeText === 'ember' ? 'active' : ''}`} onClick={() => handleClick(false)}>
                    <h3>Ember</h3>
                </div>
                <div className={`col-md-6 text-center ${activeText === 'mi' ? 'active' : ''}`} onClick={() => handleClick(true)}>
                    <h3>Mi</h3>
                </div>
            </div>
            <div className={`row ${isMiLayout ? 'mi-layout' : 'ember-layout'}`}>
                {isMiLayout ? (
                    <>
                        <div className="col-md-6">
                            <p>{miText}</p>
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
                            <p>{emberText}</p>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

Section.propTypes = {
    secCim: PropTypes.string.isRequired,
    emberImgSrc: PropTypes.string.isRequired,
    miImgSrc: PropTypes.string.isRequired,
    emberText: PropTypes.string.isRequired,
    miText: PropTypes.string.isRequired,
};

export default Section;