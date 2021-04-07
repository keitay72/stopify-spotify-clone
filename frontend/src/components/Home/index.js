import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { addAlbum } from '../../store/album';

const HomePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { [id]: album } = useSelector(state => state.album);
    useEffect(() => {
        if (!album) {
            dispatch(addAlbum(id))
        }
    }, [album])
    return (
        <>
            <div>
                <a href='http://localhost:3000/album/1'>
                    <button>Launch Web Player</button>
                </a>
            </div>
            <div>
                <h1>Home Page Detail</h1>
            </div>
        </>
    )
}

export default HomePage;