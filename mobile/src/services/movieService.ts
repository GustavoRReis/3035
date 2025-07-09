import axios from 'axios';
import { config } from '../config/index';
import { Movie } from '../types/movie';

const api = axios.create({
  baseURL: config.api.backendUrl,
  timeout: 10000,
});

export const movieService = {
  async getTrending(): Promise<Movie[]> {
    try {
      const response = await api.get('/movies/trending');
      // Converter strings de data em objetos Date
      const movies = response.data.map((movie: any) => ({
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
