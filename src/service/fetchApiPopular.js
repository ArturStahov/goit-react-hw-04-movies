import axios from 'axios';

const API_KEY = '81f248d3c9154788229a5419bb33091a';
const BASE_URL = 'https://api.themoviedb.org/3/';

export default function fetchApiPopular() {
  return axios
    .get(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then(response => response.data);
}

//${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1
