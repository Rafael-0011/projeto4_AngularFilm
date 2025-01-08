import { Component } from '@angular/core';
import { FilmsService } from '../../service/films.service';
import { ListFilmesComponent } from '../../componente/list-filmes/list-filmes.component';
import { MFilme } from '../../model/m-filme';

@Component({
  selector: 'app-list-film-popular',
  imports: [ListFilmesComponent],
  templateUrl: './list-film-popular.component.html',
  styleUrl: './list-film-popular.component.css',
})
export class ListFilmPopularComponent {
  filmesPopulares: MFilme[] = [];
  titulo = 'Filmes Populares';

  constructor(private filmesService: FilmsService) {}

  get serviceFilme() {
    return this.filmesService;
  }

  ngOnInit(): void {
    this.handleListaFilmesPopulares();
  }

  handleListaFilmesPopulares(): void {
    this.filmesService.getFilmesSeriesAlta().subscribe((data) => {
      this.filmesPopulares = data.results;
    });
  }
}
