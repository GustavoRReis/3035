import React from 'react';
import { Movie } from '../../types/movie';
import { formatReleaseDate } from '../../utils/dateUtils';
import './MovieCard.css';
import StarIcon from '@mui/icons-material/Star';

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  const isHighRated = movie.voteAverage >= 6;

  const handleClick = () => {
    onClick(movie);
  };

  return (
    <div className="movie-card" onClick={ handleClick }>
      <div className="movie-poster-wrapper">
        <img
          src={ `https://image.tmdb.org/t/p/w500${movie.posterPath}` }
          alt={ movie.title }
          className="movie-poster"
        />
        <span className={ `rating-badge-tmdb ${isHighRated ? 'high-rated' : 'low-rated'}` }>{ movie.voteAverage.toFixed(1) }</span>
        {(() => {
          if (movie.voteAverage === 0) {
            return <span className="badge-trending-tmdb upcoming">Em breve</span>;
          } else if (movie.voteAverage >= 6) {
            return <span className="badge-trending-tmdb high">Em alta</span>;
          } else {
            return <span className="badge-trending-tmdb low">Em baixa</span>;
          }
        })()}
      </div>
      <div className="movie-content-tmdb">
        <h3 className="movie-title-tmdb">{ movie.title }</h3>
        <span className="movie-date-tmdb">{ formatReleaseDate(movie.releaseDate) }</span>
        { typeof movie.voteAverage === 'number' && (
          <div className="movie-rating-block">
            <div className="movie-rating-stars">
              { [1, 2, 3, 4, 5].map((star) => {

                const ratingValue = typeof movie.voteAverage === 'number' ? movie.voteAverage : 0;
                const filled = ratingValue >= star * 2;
                return (
                  <StarIcon key={ star } className={ filled ? 'star-icon filled' : 'star-icon' } fontSize="small" />
                );
              }) }
            </div>
          </div>
        ) }
      </div>
    </div>
  );
};

export default MovieCard; 
