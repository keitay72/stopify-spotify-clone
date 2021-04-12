import React from 'react';
import "./OpenSearch.css";
import Search from "../Search";

const OpenSearch = () => {
    const musicGenres = [
        "Podcasts",
        "Made For You",
        "Charts",
        "New Releases",
        "Discover",
        "Concerts",
        "Country",
        "Latin",
        "Mood",
        "Dance / Electronic",
        "Workout",
        "R & B",
        "Focus",
        "EQUAL",
        "Stop Asian Hate",
        "Gaming",
        "Chill",
        "Christian",
        "Party",
        "Decades",
        "Romance",
        "Instrumental",
        "Alternative",
        "Wellness",
        "In the Car",
        "theLINER",
        "Pride",
        "Sleep",
        "Classical",
        "Jazz",
        "Folk & Acoustic",
        "Soul",
        "Black History Is Now",
        "Spotify Singles",
        "At Home",
        "League of Legends",
        "Cooking & Dining",
        "K-Pop",
        "Songwriters",
        "Punk",
        "Regional Mexican",
        "Sports",
        "Pop culture",
        "Higher Ground",
        "Blues",
        "Arab",
        "Desi",
        "RADAR",
        "Joe Rogan Experience",
        "Anime",
        "Tastemakers",
        "Afro",
        "Comedy",
        "TV & Movies",
        "Metal",
        "Caribbean",
        "Funk",
        "Student",
        "Commute",
        "Kids & Family",
        "Ramadan"
    ]
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
                            <div className={`openSearch__genreCard ${i}`} key={i}>
                                <h2>{genre}</h2>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    );
};

export default OpenSearch;