import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { movieService } from '../services/movieService';

interface Movie {
  id: number;
  title: string;
  voteAverage: number;
  posterPath: string;
  overview: string;
  backdropPath?: string;
  originalTitle?: string;
  voteCount?: number;
  popularity?: number;
  adult?: boolean;
  video?: boolean;
  genreIds?: number[];
  releaseDate?: Date;
}

interface MovieContextType {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  getMovieById: (id: number) => Movie | undefined;
  refetch: () => Promise<void>;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export { MovieContext };

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await movieService.getTrending();
      setMovies(data);
    } catch (e) {
      setError('Erro ao buscar filmes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const getMovieById = (id: number) => movies.find(m => m.id === id);

  const refetch = async () => {
    await fetchMovies();
  };

  return (
    <MovieContext.Provider value={{ movies, loading, error, getMovieById, refetch }}>
      {children}
    </MovieContext.Provider>
  );
}; 
