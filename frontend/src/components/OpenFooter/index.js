import React from 'react';
import "./OpenFooter.css";
import SongPlayer from "../SongPlayer";

const OpenFooter = () => {
    return (
        <div className="openFooter">
            {/* <iframe className="openFooter__player" src="https://open.spotify.com/embed/track/22bX2FwXSvG49G0bPWm5nc" border='0' width='100%' height='80px' allowfullscreen allowcontrols allow="encrypted-media"></iframe> */}
            <SongPlayer />
        </div>
    );
};

export default OpenFooter;