import axios from 'axios';

const API_KEY = '81f248d3c9154788229a5419bb33091a';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';

export default function fetchCast(movieID) {
  return axios
    .get(`${BASE_URL}${movieID}/credits?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
}

//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
