import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { addAlbum } from '../../store/album';

const AlbumDetail = () => {
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
            <h1>Album Detail Page</h1>
            <div>
                <iframe src="https://open.spotify.com/embed/album/0vuwlanMPucXrYMGnOjhYL" width="300" height="380" frameborder="0"
                    allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        </>
    )
}

export default AlbumDetail;