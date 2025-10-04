import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default instance;

// Compare this snippet from Netflix/netflix-clone/src/Components/utils/request.js:
// const API_KEY = '8f8f93c4d94c12bd34f20356839fbd32';  
// const requests = {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,