const express = require('express');
const asyncHandler = require('express-async-handler');
const axios = require('axios');
const { setSpotifyToken } = require('../../utils/auth');
const router = express.Router();

router.use(setSpotifyToken);

router.get('/', (req, res) => {
    res.json({ test: 'message' })
});

router.get(
    '/albums',
    asyncHandler(async (req, res) => {
        const { albumId } = req.query
        if (albumId) {
            let config = {
                method: "GET",
                url: `https://api.spotify.com/v1/albums?ids=${albumId}`,
                headers: {
                    Authorization: `Bearer ${process.env.SPTFY_ACCESS_TOKEN}`,
                },
            };
            const response = await axios(config);
            if (response.status === 200) {
                const albums = {}
                response.data.albums.forEach(album => {
                    totalDuration = 0
                    albums[album.id] = {
                        openUrl: album.external_urls['spotify'],
                        artists: album.artists.map(artist => artist.name),
                        genres: album.genres.map(genre => genre),
                        image: album.images[0].url,
                        label: album.label,
                        name: album.name,
                        release_date: album.release_date.split('-')[0],
                        copyrights: album.copyrights.map(copyright => copyright.text),
                        songs: {
                            total: album.total_tracks,
                            tracks: album.tracks.items.map(track => {
                                totalDuration += track.duration_ms
                                return {
                                    name: track.name,
                                    artists: track.artists.map(artist => {
                                        return {
                                            name: artist.name,
                                            id: artist.id,
                                        }
                                    }),
                                    duration: track.duration_ms,
                                    track_number: track.track_number,
                                    explicit: track.explicit,
                                }
                            }),
                        },
                    }
                    albums[album.id].totalDuration = totalDuration
                    console.log(album.label)
                })

                res.json({ albums })
            } else {
                res.json({ response: `${response.status}` })
            }
        } else {
            res.json({ error: 'No album id found' }, 404)
        }
    })
);

router.get(
    '/search',
    asyncHandler(async (req, res) => {
        types = ['album', 'artist', 'playlist', 'track'];
        const { q, type, limit, offset } = req.query;
        if (q && types.includes(type)) {
            let config = {
                method: "GET",
                url: `https://api.spotify.com/v1/search?q=${q}&type=${type}&limit=${limit}&offset=${offset}`,
                headers: {
                    Authorization: `Bearer ${process.env.SPTFY_ACCESS_TOKEN}`,
                },
            };
            const response = await axios(config);
            if (response.status === 200) {
                const defaultImage = "https://img.pngio.com/my-my-png-album-covers-500_500.png";
                if (response.data[`${type}s`].items.length) {
                    switch (type) {
                        case 'album':
                            const { albums } = response.data;
                            res.json({
                                total: albums.total,
                                album: Object.assign(
                                    ...albums.items.map(album => {
                                        return {
                                            [album.id]: {
                                                openUrl: album.external_urls['spotify'],
                                                name: album.name,
                                                artists: album.artists.map(artist => artist.name),
                                                image: album.images[0] ? album.images[0].url : defaultImage,
                                                songs: {
                                                    total: album.total_tracks,
                                                },
                                            }
                                        }
                                    })
                                )
                            })
                            break;
                        case "track":
                            const { tracks } = response.data;
                            res.json({
                                total: tracks.total,
                                track: Object.assign(
                                    ...tracks.items.map((track) => {
                                        return {
                                            [track.id]: {
                                                openUrl: track.external_urls["spotify"],
                                                image: track.album.images[0]
                                                    ? track.album.images[0].url
                                                    : defaultImage,
                                                name: track.name,
                                                duration: track.duration_ms,
                                                explicit: track.explicit,
                                                popularity: track.popularity,
                                                artists: track.album.artists.map((artist) => {
                                                    return {
                                                        id: artist.id,
                                                        name: artist.name,
                                                    };
                                                }),
                                                album: {
                                                    id: track.album.id,
                                                    name: track.album.name,
                                                },
                                            },
                                        };
                                    })
                                ),
                            });
                            break;
                        case "artist":
                            const { artists } = response.data;
                            res.json({
                                total: artists.total,
                                artist: Object.assign(
                                    ...artists.items.map((artist) => {
                                        return {
                                            [artist.id]: {
                                                openUrl: artist.external_urls["spotify"],
                                                image: artist.images[0] ? artist.images[0].url : defaultImage,
                                                name: artist.name,
                                                genres: artist.genres,
                                                followers: artist.followers.total,
                                                popularity: artist.popularity,
                                            },
                                        };
                                    })
                                ),
                            });
                            break;
                        default:
                            break;
                    }
                } else {
                    res.json(`No data`)
                }
            }
        } else {
            res.json(`Data error`)
        }
    })
)

module.exports = router;