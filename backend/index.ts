import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { TMDBMovieRepository } from './infra/api/TMDBMovieRepository.js';
import { GetTrendingMovies } from './domain/usecases/GetTrendingMovies.js';

config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:4173'],
  credentials: true
}));

app.get('/movies/trending', async (req, res) => {
  try {
    const movieRepository = new TMDBMovieRepository();
    const getTrendingMovies = new GetTrendingMovies(movieRepository);
    const movies = await getTrendingMovies.execute();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar filmes em alta', details: error instanceof Error ? error.message : error });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
}); 
