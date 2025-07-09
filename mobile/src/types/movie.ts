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
