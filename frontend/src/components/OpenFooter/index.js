import React from 'react';
import "./OpenFooter.css";

const OpenFooter = () => {
    return (
        <div className="openFooter">
            {/* <div className="openFooter__left">
                <h1>Album and song details</h1>
            </div>
            <div className="openFooter__center">
                <h1>Player controls</h1>
            </div>
            <div className="openFooter__right">
                <h1>Volume controls</h1>
            </div> */}<iframe className="openFooter__player" src="https://open.spotify.com/embed/track/22bX2FwXSvG49G0bPWm5nc" border='0' width='100%' height='80px' allowfullscreen allowcontrols allow="encrypted-media"></iframe>
        </div>
    );
};

export default OpenFooter;