import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
}; 
