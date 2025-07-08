export interface MovieApiResponse {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
  backdrop_path?: string;
  original_title?: string;
  vote_count?: number;
  popularity?: number;
  adult?: boolean;
  video?: boolean;
  genre_ids?: number[];
}
