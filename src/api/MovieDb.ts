import axios from 'axios';
import {REACT_APP_API_KEY} from '@env';

export const movieDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: REACT_APP_API_KEY,
    language: 'es-MX',
  },
});
