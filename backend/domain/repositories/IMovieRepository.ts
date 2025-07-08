import { Movie } from '../entities/Movie';

export interface IMovieRepository {
  getTrending(): Promise<Movie[]>;
}
