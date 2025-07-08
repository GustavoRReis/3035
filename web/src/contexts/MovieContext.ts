import { createContext, useContext } from 'react';
import { Movie } from '../types/movie';

export interface MovieContextType {
  movies: Movie[];
  filteredMovies: Movie[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  fetchTrendingMovies: () => Promise<void>;
  getMovieById: (id: number) => Movie | null;
}

export const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const useMovieContext = (): MovieContextType => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
}; 
