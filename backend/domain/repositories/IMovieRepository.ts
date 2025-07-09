import { Movie } from '../entities/Movie.js';

export interface IMovieRepository {
  getTrending(): Promise<Movie[]>;
}
