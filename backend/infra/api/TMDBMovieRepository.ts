import { IMovieRepository } from '../../domain/repositories/IMovieRepository.js';
import { Movie } from '../../domain/entities/Movie.js';
import { MovieApiResponse } from '../../types/MovieApiResponse.js';

const API_CONFIG = {
  TMDB_API_KEY: process.env.TMDB_API_KEY || process.env.VITE_TMDB_API_KEY || '6b8b8aadfe9effd572a474adf7e24a84',
  TMDB_BASE_URL: process.env.TMDB_BASE_URL || process.env.VITE_TMDB_BASE_URL || 'https://api.themoviedb.org/3',
  TMDB_LANGUAGE: process.env.TMDB_LANGUAGE || process.env.VITE_TMDB_LANGUAGE || 'pt-BR',
};

export class TMDBMovieRepository implements IMovieRepository {
  async getTrending(): Promise<Movie[]> {
    const url = `${API_CONFIG.TMDB_BASE_URL}/trending/movie/week?api_key=${API_CONFIG.TMDB_API_KEY}&language=${API_CONFIG.TMDB_LANGUAGE}`;
    const res = await fetch(url);
    const data = await res.json();

    return data?.results?.map(this.dtoToMovie) || [];
  }

  private dtoToMovie(dto: MovieApiResponse): Movie {
    const movie = new Movie(
      dto.id,
      dto.title,
      dto.poster_path,
      new Date(dto.release_date),
      dto.vote_average,
      dto.overview,
      dto.backdrop_path,
      dto.original_title,
      dto.vote_count,
      dto.popularity,
      dto.adult,
      dto.video,
      dto.genre_ids
    );

    return movie;
  }
}
