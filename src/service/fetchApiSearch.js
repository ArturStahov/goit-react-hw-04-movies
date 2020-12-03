import axios from 'axios';

const API_KEY = '81f248d3c9154788229a5419bb33091a';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie?';

export default function fetchApiSearch(query, page) {
  return axios
    .get(
      `${BASE_URL}api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`,
    )
    .then(response => response.data);
}

//https://api.themoviedb.org/3/search/movie?api_key=81f248d3c9154788229a5419bb33091a&language=en-US&query=strong&page=1&include_adult=false
