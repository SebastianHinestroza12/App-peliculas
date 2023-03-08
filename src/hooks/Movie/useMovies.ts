import {useEffect, useState} from 'react';
import {movieDb} from '../../api/MovieDb';
import {MovieDB, Movies} from '../../interfaces';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesInCinemas, setMoviesInCinemas] = useState<Movies[]>([]);

  /**
   * Obtiene las películas de la API y establece el estado de las películas en los cines.
   */
  const getMovies = async () => {
    const response = await movieDb.get<MovieDB>('/now_playing');
    setMoviesInCinemas(response.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    moviesInCinemas,
    isLoading,
  };
};
