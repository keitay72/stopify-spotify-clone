import React from 'react';
import './Card.css';
import { updateSongLink } from '../../store/song'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Card = ({ id, type, cardInfo }) => {
    const { image, title, text } = cardInfo;
    const dispatch = useDispatch();
    const history = useHistory();
    const player = (event) => {
        event.stopPropagation()
        dispatch(updateSongLink(`https://open.spotify.com/embed/${type}/${id}`))
    }
    const navigate = (id) => {
        history.push(`/${type}/${id}`)
    }
    return (
        <div
            onClick={() => {
                navigate(id);
            }}
        >
            <div
                src={image}
                alt="card"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div onClick={player}>
                    <i className="fas fa-play"></i>
                </div>
            </div>
            <div>
                <p>{title}</p>
                <p>{text}</p>
            </div>
        </div>
    )
};

export default Card;