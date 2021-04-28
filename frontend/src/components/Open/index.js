
import React, { useState } from "react";
import ResizePanel from "react-resize-panel";
import style from './Open2.css';
// import classNames from 'classnames/bind';
import { useSelector } from "react-redux";
import SongPlayer from "../SongPlayer";
import OpenFooter from "./../OpenFooter";
import OpenSidebar from "./../OpenSidebar";
import OpenBody from "./../OpenBody";

// let cx = classNames.bind(style);
const Open = () => {
    const [active, setActive] = useState("openHome");
    const [results, setResults] = useState([]);
    const [song, setSong] = useState("https://open.spotify.com/embed/album/7paOpVZ35xmBn9ijROCG5Q");

    return (
        <div className='container'>
            <div className='body'>
                <OpenSidebar setActive={setActive} />
                {/* <div className='content panel'>content</div> */}
                <OpenBody active={active} setActive={setActive} results={results} setResults={setResults} setSong={setSong} />
            </div>

            <div className="songbar">
                <iframe
                    src={song}
                    width="100%"
                    height="80px"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media">
                </iframe>
            </div>
        </div>
    )
};

export default Open;