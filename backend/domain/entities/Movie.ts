export class Movie {
  constructor(
    public id: number,
    public title: string,
    public posterPath: string,
    public releaseDate: Date,
    public voteAverage: number,
    public overview: string,
    public backdropPath?: string,
    public originalTitle?: string,
    public voteCount?: number,
    public popularity?: number,
    public adult?: boolean,
    public video?: boolean,
    public genreIds?: number[]
  ) {}
}
