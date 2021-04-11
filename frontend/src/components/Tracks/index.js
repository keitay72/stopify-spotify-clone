import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Tracks.css";
import { updateSongLink } from "../../store/song";

const Tracks = ({ id, rowInfo }) => {
    const { image, name, artists, explicit, duration } = rowInfo;
    const history = useHistory();
    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useDispatch();

    const convertTime = (ms) => {
        const minutes = ms / 1000 / 60;
        const seconds = (minutes % 1).toFixed(4) * 60;
        return `${Math.floor(minutes)}:${String(Math.floor(seconds)).padStart(
            2,
            "0"
        )}`;
    };
    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    const navigate = (link) => {
        history.push(link);
    };

    const updatePlayer = () => {
        dispatch(updateSongLink(`https://open.spotify.com/embed/track/${id}`));
    };

    return (
        <div>
            <div>
                <div onClick={updatePlayer}>
                    <div>
                        <i className="fas fa-play"></i>
                    </div>
                    <img src={image} />
                </div>
                <div>
                    <b>{name}</b>
                    <div>
                        {explicit && <span>E</span>}
                        <div>
                            {artists.map((artist) => {
                                return (
                                    <p
                                        key={artist.id} onClick={() => navigate(`/artist/${artist.id}`)}
                                    >
                                        {artist.name}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <i
                    className={`${isLiked ? "fas is-liked" : "fal"
                        } fa-heart heart-button`}
                    onClick={toggleLike}
                ></i>
                <p>{convertTime(duration)}</p>
                <i className="far fa-ellipsis-h"></i>
            </div>
        </div>
    );
};

export default Tracks;