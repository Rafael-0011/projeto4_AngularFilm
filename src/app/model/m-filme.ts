import { IFilme } from '../inteface/i-filme';

export class MFilme implements IFilme {
  constructor(
    public id: number,
    public poster_path: string,
    public genres: { id: number; name: string }[],
    public production_companies: { name: string }[],
    public title: string,
    public overview: string,
    public release_date: string,
    public vote_average: string
  ) {}
}
