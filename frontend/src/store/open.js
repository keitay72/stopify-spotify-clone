import { fetch } from './csrf.js';

const SEARCH_GENRE = "open/searchGenre";


const searchGenre = (genre, limit) => ({
    type: SEARCH_GENRE,
    genre: genre,
    limit: limit,
});

export const searchResults = (genre, limit = 50) => async dispatch => {
    const res = await fetch(`/api/music/open?genre=${genre}&limit=${limit}`);
    if (res.status === 200) {
        const filtered = res.data.filter(x => x !== null);
        // const { } = res.data;
        // const state = getState();


        // dispatch(searchGenre(genre, limit));
        // console.log(res.data);
        return filtered;
    }
};

const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_GENRE:
            return {
                ...state,
                limit: action.limit,
            }
        default:
            return state;
    }
}