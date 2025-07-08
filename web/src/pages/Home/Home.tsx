import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../../types/movie';
import { useMovieContext } from '../../contexts/MovieContext';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { filteredMovies, loading, error, searchQuery } = useMovieContext();

  const handleMovieClick = (movie: Movie) => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <div className="home-title-block">
          <h1 className="home-title">Bem-vindo ao 3035 Filmes</h1>
          <p className="home-description">Aqui você encontra os filmes mais bem avaliados do momento. Explore e descubra os destaques do cinema!</p>
        </div>
      </div>

      <MovieGrid
        movies={filteredMovies}
        loading={loading}
        error={error}
        onMovieClick={handleMovieClick}
        searchQuery={searchQuery}
      />
      <footer className="home-footer">
        <span className="footer-copyright">&copy; {new Date().getFullYear()} Desenvolvido por Gustavo Reis</span>
      </footer>
    </div>
  );
};

export default Home; 
