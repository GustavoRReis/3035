import { config } from 'dotenv';

config();

export const env = {
  TMDB_API_KEY: process.env.TMDB_API_KEY,
  TMDB_BASE_URL: process.env.TMDB_BASE_URL || 'https://api.themoviedb.org/3',
  TMDB_LANGUAGE: process.env.TMDB_LANGUAGE || 'pt-BR',
} as const;

if (!env.TMDB_API_KEY) {
  throw new Error('TMDB_API_KEY environment variable is required');
} 
