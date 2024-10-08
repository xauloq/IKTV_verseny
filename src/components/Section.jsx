import PropTypes from "prop-types";
import { useState } from "react";
import './Section.css'; // Import the CSS file

function Section(props) {
    const [imgSrc, setImgSrc] = useState(props.emberImgSrc);
    const [isMiLayout, setIsMiLayout] = useState(false);

    const handleEmberClick = () => {
        setImgSrc(props.emberImgSrc);
        setIsMiLayout(false);
    };

    const handleMiClick = () => {
        setImgSrc(props.miImgSrc);
        setIsMiLayout(true);
    };

    return (
        <section className="container card mt-4">
            <div className="row">
                <div className="col-6 text-center" onClick={handleEmberClick}>
                    <h2>{props.emberCim}</h2>
                    <h3>Ember</h3>
                </div>
                <div className="col-6 text-center" onClick={handleMiClick}>
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