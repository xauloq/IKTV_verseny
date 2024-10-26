import React from 'react';
import './ScrollButton.css';

// eslint-disable-next-line react/prop-types
const ScrollButton = ({ targetId, children }) => {
    const handleClick = () => {
        const scroller = document.getElementById(targetId);
        scroller?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <button className="inditas" onClick={handleClick}>
            {children}
        </button>
    );
};

export default ScrollButton;