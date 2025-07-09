import axios from 'axios';
import { apiConfig } from '../config/api.js';
import { Movie } from '../types/movie.js';

interface MovieFromBackend {
  id: number;
  title: string;
  posterPath: string;
  releaseDate: string;
  voteAverage: number;
  overview: string;
  backdropPath?: string;
  originalTitle?: string;
  voteCount?: number;
  popularity?: number;
  adult?: boolean;
  video?: boolean;
  genreIds?: number[];
}

const api = axios.create({
  baseURL: apiConfig.BACKEND_URL,
  timeout: 10000,
});

export const movieService = {
  async getTrending(): Promise<Movie[]> {
    try {
      console.log('====> iniciando busca de filmes em alta');
      const response = await api.get('/movies/trending');
      console.log('====> response', response);
      const movies = response.data.map((movie: MovieFromBackend) => ({
        ...movie,
        releaseDate: new Date(movie.releaseDate)
      }));
      return movies;
    } catch (error) {
      console.error('Erro ao buscar filmes em alta:', error);
      throw error;
    }
  }
}; 
 