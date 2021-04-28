import React from 'react';
import "./OpenResults.css";

const OpenResults = ({ results, setSong }) => {
    const playSong = (url) => {

        let split = url.split(".com");
        url = split[0] + ".com/embed" + split[1];
        setSong(url)
    }
    return (
        <div className="openResults">
            {results.map((result, i) => (
                <div key={i} className="openResults__card" onClick={() => playSong(result.url)}>
                    <img className="openResults__image" src={result.image} style={{ width: "180px", height: "180px" }} />
                    <p className="openResults__title">{result.title}</p>
                    <p className="openResults__artist">{result.artist}</p>
                </div>
            ))}
        </div>
    );
};

export default OpenResults;