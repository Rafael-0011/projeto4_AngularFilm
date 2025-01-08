export interface IFilme {
  id: number;
  poster_path: string;
  genres: { id: number; name: string }[];
  production_companies: { name: string }[];
  title: string;
  overview: string;
  release_date: string;
  vote_average: string;
  backdrop_path: string;
}
