const express = require('express');
const asyncHandler = require('express-async-handler');
const axios = require('axios');
const { setSpotifyToken } = require('../../utils/auth');
const { request } = require('express');

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
                        copyrights: album.copyrights.map(copyright => copyright.text),
                        songs: {
                            total: album.total_tracks,
                            tracks: album.tracks.items.map(track => {
                                totalDuration += track.duration_ms
                                return {
                                    name: track.name,
                                    artists: track.artists.map(artist => artist.name),
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

module.exports = router;