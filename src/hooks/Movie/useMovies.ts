import {useContext, useEffect, useState} from 'react';
import {movieDb} from '../../api/MovieDb';
import {MovieDB, Movies} from '../../interfaces';
import {getImageColors} from '../../helper/getColor';
import {GradientContext} from '../../context/GradientContext';

interface MoviesState {
  nowPlaying: Movies[];
  popular: Movies[];
  topRated: Movies[];
  upcoming: Movies[];
}

export const useMovies = () => {
  const {setMainColors} = useContext(GradientContext);
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  /**
   * Obtiene las películas de la API y establece el estado de las películas en los cines.
   */
  const getMoviesRequest = async () => {
    const nowPlaying = movieDb.get<MovieDB>('/now_playing');
    const popular = movieDb.get<MovieDB>('/popular');
    const topRated = movieDb.get<MovieDB>('/top_rated');
    const upcoming = movieDb.get<MovieDB>('/upcoming');

    const response = await Promise.all([
      nowPlaying,
      upcoming,
      topRated,
      popular,
    ]);

    setMoviesState({
      nowPlaying: response[0].data.results,
      upcoming: response[1].data.results,
      topRated: response[2].data.results,
      popular: response[3].data.results,
    });
    setIsLoading(false);
  };

  const getPosterColors = async (index: number) => {
    const movie = moviesState.nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;
    const [primary = 'green', secondary = 'black', tertiary = 'white'] =
      await getImageColors(uri);
    setMainColors({primary, secondary, tertiary});
  };

  useEffect(() => {
    getMoviesRequest();
  }, []);

  return {
    ...moviesState,
    isLoading,
    getPosterColors,
  };
};
