// src/utils/axios.js

import axios from 'axios';

// Define the base URL for the API (You can change this to the TMDB API URL)
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',  // The base URL for TMDB API
    params: {
    api_key: '8f8f93c4d94c12bd34f20356839fbd32',  // Add your API key here as a default parameter
  },
});

export default instance;
