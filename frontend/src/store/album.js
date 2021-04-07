import { fetch } from './csrf.js';

const GET_ALBUM = 'album/getAlbum';

const getAlbum = (album) => ({
    type: GET_ALBUM,
    album,
});

export const addAlbum = (ids) => async (dispatch) => {
    const res = await fetch(`/api/music/albums?albumId=${ids}`);
    if (res.ok) {
        dispatch(getAlbum(res.data.albums));
    }
};

const initialState = {};

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALBUM:
            return {
                ...state,
                ...action.album,
            }
        default:
            return state;
    }
};

export default reducer;