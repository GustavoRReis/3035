import React from 'react';
import { CircularProgress, Alert } from '@mui/material';
import { Movie } from '../../types/movie';
import MovieCard from '../MovieCard/MovieCard';
import './MovieGrid.css';

interface MovieGridProps {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  onMovieClick: (movie: Movie) => void;
  searchQuery?: string;
}

const MovieGrid: React.FC<MovieGridProps> = ({
  movies,
  loading,
  error,
  onMovieClick,
  searchQuery = '',
}) => {
  if (loading) {
    return (
      <div className="loading-container">
        <CircularProgress size={60} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <Alert severity="error" sx={{ maxWidth: 600 }}>
          {error}
        </Alert>
      </div>
    );
  }

  if (movies.length === 0) {
    const isSearching = searchQuery.trim().length > 0;
    
    return (
      <div className="empty-container">
        <h2 className="empty-title">
          {isSearching ? 'Nenhum filme encontrado' : 'Nenhum filme disponível'}
        </h2>
        <p className="empty-description">
          {isSearching 
            ? `Não foi possível encontrar filmes para "${searchQuery}". Tente ajustar sua busca.`
            : 'Tente novamente mais tarde ou explore outras categorias.'
          }
        </p>
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-grid-item">
          <MovieCard movie={movie} onClick={onMovieClick} />
        </div>
      ))}
    </div>
  );
};

export default MovieGrid; 
