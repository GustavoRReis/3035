import React, { useState, useEffect, ReactNode } from 'react';
import { Movie } from '../types/movie';
import { movieService } from '../services/movieService';
import { MovieContext, MovieContextType } from './MovieContext';

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchTrendingMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const trendingMovies = await movieService.getTrending.execute();
      setMovies(trendingMovies);
      setFilteredMovies(trendingMovies);
    } catch {
      setError('Erro ao carregar filmes em tendência');
    } finally {
      setLoading(false);
    }
  };

  // Filtra os filmes baseado na busca
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredMovies(movies);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const filtered = movies.filter(movie => 
      movie.title.toLowerCase().includes(query)
    );
    
    setFilteredMovies(filtered);
  }, [searchQuery, movies]);

  // Carrega filmes em tendência na inicialização
  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const getMovieById = (id: number): Movie | null => {
    return movies.find(movie => movie.id === id) || null;
  };

  const value: MovieContextType = {
    movies,
    filteredMovies,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    fetchTrendingMovies,
    getMovieById,
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
}; 
