export interface Movie {
  id: number;
  title: string;
  posterPath: string;
  releaseDate: Date;
  voteAverage: number;
  overview: string;
  backdropPath?: string;
  originalTitle?: string;
  voteCount?: number;
  popularity?: number;
  adult?: boolean;
  video?: boolean;
  genreIds?: number[];
}

export interface MovieApiResponse {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
  backdrop_path?: string;
  genre_ids?: number[];
  original_title?: string;
  popularity?: number;
  vote_count?: number;
  adult?: boolean;
  video?: boolean;
}

export interface MovieSearchResponse {
  page: number;
  results: MovieApiResponse[];
  total_pages: number;
  total_results: number;
}

export interface MovieTrendingResponse {
  page: number;
  results: MovieApiResponse[];
  total_pages: number;
  total_results: number;
} 
