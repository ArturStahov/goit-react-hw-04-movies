import axios from 'axios';

const API_KEY = '81f248d3c9154788229a5419bb33091a';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';

export default function fetchApiPopular(movieID) {
  return axios
    .get(`${BASE_URL}${movieID}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
}

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
