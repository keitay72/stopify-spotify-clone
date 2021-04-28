const arr = [
    "acoustic",
    "afrobeat",
    "alt-rock",
    "alternative",
    "anime",
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
];

// console.log(arr.length)

const examples = ["a", "a", "a", "b", "a", "a", "b", "b", "a", "a", "b", "a", "a",];

const tracks = [
    {
        type: "ALBUM",
        title: "Eyes On You",
        artist: "Chase Rice"
    },
    {
        type: "SINGLE",
        title: "Hell On The Heart",
        artist: "Chase Rice"
    },
    {
        type: "ALBUM",
        title: "Backseat Driver",
        artist: "Chase Rice"
    },
    {
        type: "ALBUM",
        title: "This Time",
        artist: "Chase Rice"
    },
    {
        type: "SINGLE",
        title: "Baby Blues",
        artist: "Chase Rice"
    }
]

console.log(tracks.map((track) => {
    if (track.type === "ALBUM") {
        return track;
    }
}))