import { IMovieRepository } from '../repositories/IMovieRepository';
import { Movie } from '../entities/Movie';

export class GetTrendingMovies {
  constructor(private movieRepository: IMovieRepository) {}

  async execute(): Promise<Movie[]> {
    const movies = await this.movieRepository.getTrending();
    return movies.sort((a, b) => b.voteAverage - a.voteAverage);
  }
}
