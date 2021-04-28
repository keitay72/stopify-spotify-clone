import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { addAlbum } from '../../store/album';
import "./Home.css";
import { Link } from 'react-router-dom';

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
                <Link to='/open'>
                    <a>
                        <button className="homePage__webPlayer">Launch Web Player</button>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default HomePage;