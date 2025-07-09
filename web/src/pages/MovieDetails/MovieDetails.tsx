import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';
import { Star as StarIcon } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useMovieContext } from '../../contexts/MovieContext';
import './MovieDetails.css';

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const theme = useTheme();
  const navigate = useNavigate();
  const { getMovieById } = useMovieContext();

  const movie = id ? getMovieById(parseInt(id)) : null;

  if (!movie) {
    return (
      <div className="movie-details-container">
        <h1 style={{ color: theme.palette.error.main }}>
          Filme não encontrado
        </h1>
      </div>
    );
  }

  const formatReleaseDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const bannerUrl = movie.backdropPath
    ? `https://image.tmdb.org/t/p/original${movie.backdropPath}`
    : `https://image.tmdb.org/t/p/original${movie.posterPath}`;

  return (
    <div className="movie-details-banner-wrapper">
      <div className="movie-details-banner" style={{ backgroundImage: `url(${bannerUrl})` }}>
        <button className="back-btn back-btn-absolute" onClick={() => navigate('/')}>
          <ArrowBackIcon style={{ fontSize: 22, marginRight: 6, color: 'var(--color-primary)' }} />
          Voltar
        </button>
        <div className="movie-details-overlay" />
        <div className="movie-details-main">
          <div className="movie-details-poster-col">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
              alt={movie.title}
              className="movie-details-poster"
            />
          </div>
          <div className="movie-details-info-col">
            <h1 className="movie-title">
              {movie.title} <span className="movie-year">({movie.releaseDate.getFullYear()})</span>
            </h1>
            {movie.originalTitle && movie.originalTitle !== movie.title && (
              <div className="original-title">{movie.originalTitle}</div>
            )}
            <div className="movie-details-row">
              <span className="vote-badge">
                <StarIcon sx={{ color: '#ffd700', fontSize: 20 }} />
                {movie.voteAverage.toFixed(1)}
              </span>
              <span className="vote-count">{movie.voteCount?.toLocaleString('pt-BR') || 'N/A'} votos</span>
              <span className="release-date">{formatReleaseDate(movie.releaseDate)}</span>
            </div>
            <div className="movie-details-actions-row">
            </div>
            <h2 className="section-title">Sinopse</h2>
            <p className="movie-overview">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails; 
