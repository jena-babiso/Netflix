import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import requests from '../../utils/request';
import './banner.css';  // Import the CSS file

function Banner() {
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                const randomIndex = Math.floor(Math.random() * request.data.results.length);
                const selectedMovie = request.data.results[randomIndex];
                setMovie(selectedMovie);
                console.log(selectedMovie); // Log to check the movie data
            } catch (error) {
                console.error('Error fetching banner movie:', error);
            }
        })();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    return (
        <div
            className="banner"
            style={{
                backgroundSize: 'cover',
        backgroundImage: movie?.backdrop_path? `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`
                    : 'none',  // Ensure the backgroundImage is set properly
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="banner-contents">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner-buttons">
                    <button className="banner-button bn1">Play</button>
                    <button className="banner-button">My List</button>
                </div>
                <h1 className="banner-description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner-fadeBottom" />
        </div>
    );
}

export default Banner;
