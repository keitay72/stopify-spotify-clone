import React from 'react';

import "./OpenSearch.css";
import Search from "../Search";
import { searchResults } from "../../store/open";
import { useDispatch } from 'react-redux';


const OpenSearch = ({ setActive, setResults }) => {
    const dispatch = useDispatch();
    const musicGenres = [
        "acoustic",
        "alt-rock",
        "alternative",
        "bluegrass",
        "blues",
        "brazil",
        "breakbeat",
        "british",
        "chill",
        "classical",
        "club",
        "country",
        "dance",
        "dancehall",
        "deep-house",
        "disco",
        "electronic",
        "folk",
        "funk",
        "garage",
        "gospel",
        "groove",
        "grunge",
        "guitar",
        "happy",
        "hard-rock",
        "heavy-metal",
        "hip-hop",
        "holidays",
        "honky-tonk",
        "house",
        "indie",
        "indie-pop",
        "jazz",
        "k-pop",
        "latin",
        "metal",
        "movies",
        "new-age",
        "new-release",
        "opera",
        "party",
        "piano",
        "pop",
        "punk",
        "rainy-day",
        "reggae",
        "road-trip",
        "rock",
        "rockabilly",
        "romance",
        "sad",
        "salsa",
        "samba",
        "show-tunes",
        "singer-songwriter",
        "ska",
        "sleep",
        "soul",
        "soundtracks",
        "summer",
        "tango",
        "techno",
        "trance",
        "work-out",
    ];

    const cardClick = async (genre) => {
        setResults(await dispatch(searchResults(genre)));
        setActive("openResults");
    };

    return (
        <>
            <div className="openSearch">
                {/* <input type="text" className="openSearch__input" placeholder="Search Artists, Albums, Songs" /> */}
                <Search />
            </div>
            <div className="openSearch__topText">
                {/* <h2>Your top genres</h2> */}
            </div>
            <section className="openSearch__genreContainer" aria-label="Your top genres">
                <div className="openSearch__genreTextContainer">
                    <h2 className="openSearch__genreText">Your top genres</h2>
                </div>
                <div className="openSearch__cardContainer">
                    <div className="openSearch__genres scroll">
                        <div className="openSearch__card rock">
                            <h2>Rock</h2>
                        </div>
                        <div className="openSearch__card indie">
                            <h2>Indie</h2>
                        </div>
                        <div className="openSearch__card hiphop">
                            <h2>Hip Hop</h2>
                        </div>
                        <div className="openSearch__card pop">
                            <h2>Pop</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="openSearch__browseContainer">
                <div className="openSearch__browseTextContainer">
                    <h2 className="openSearch__browseText">Browse all</h2>
                </div>
                <div className="openSearch__browseCardContainer">
                    {musicGenres.map((genre, i) => {
                        return (
                            <div className={`openSearch__genreCard ${i}`} key={i} onClick={() => cardClick(genre)}>
                                <h2>{genre.replace(/\b\w/g, match => match.toUpperCase())}</h2>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    );
};

export default OpenSearch;