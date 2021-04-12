import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { addAlbum } from '../../store/album';
import "./Home.css";

const HomePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { [id]: album } = useSelector(state => state.album);
    useEffect(() => {
        if (!album) {
            dispatch(addAlbum(id))
        }
    }, [album, dispatch, id])
    return (
        <div className="homePage">
            <div className="homePage__button">
                <a href='http://localhost:3000/open'>
                    <button>Launch Web Player</button>
                </a>
            </div>
            <div className="homePage__text">
                <h1>Home Page Detail</h1>
            </div>
        </div>
    )
}

export default HomePage;