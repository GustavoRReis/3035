import { TMDBMovieRepository } from '@backend/infra/api/TMDBMovieRepository';
import { GetTrendingMovies } from '@backend/domain/usecases/GetTrendingMovies';

const movieRepository = new TMDBMovieRepository();

export const movieService = {
  getTrending: new GetTrendingMovies(movieRepository)
}; 
 