/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {movieDb} from '../../api/MovieDb';
import {MovieDetails} from '../../interfaces/index';
import {Actors, Cast} from '../../interfaces/actors';

interface MoviesDetail {
  isLoading: boolean;
  movieFull?: MovieDetails;
  cast: Cast[];
}

export const useMovieDetail = (movieId: number) => {
  const [movieDetail, setMovieDetail] = useState<MoviesDetail>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetail = async () => {
    const movieDetailPromise = movieDb.get<MovieDetails>(`/${movieId}`);
    const movieCreditsActors = movieDb.get<Actors>(`/${movieId}/credits`);

    const request = await Promise.all([movieDetailPromise, movieCreditsActors]);

    const [movieDetailResponse, creditsActors] = request;

    setMovieDetail({
      isLoading: false,
      movieFull: movieDetailResponse.data,
      cast: creditsActors.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetail();
  }, [movieDetail]);

  return {
    ...movieDetail,
  };
};
