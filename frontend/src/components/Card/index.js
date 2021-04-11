import React from 'react';
import './Card.css';
import { updateSongLink } from '../../store/song'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import grad from 'gradient-from-image';
const url = "https://picsum.photos/600/600?image=199";

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

    grad.gr(url).then(gr => {

        console.log(gr);

        let bg = "linear-gradient(" + gr.vibrant + ")";
        let el = document.querySelector(".card-container");
        el.style.background = bg;
    })

    // console.log(gradients);

    return (
        <div className="card-container"
            onClick={() => {
                navigate(id);
            }}
        >
            <div className="card-image"
                src={image}
                alt="card"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div onClick={player} className="card-player">
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