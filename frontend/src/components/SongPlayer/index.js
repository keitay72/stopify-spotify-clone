import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./SongPlayer.css";

const SongPlayer = () => {
    const song = useSelector((state) => state.song);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, [song]);

    return (
        isLoaded && (
            <iframe
                src={song.link}
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
            ></iframe>
        )
    );
};

export default SongPlayer;