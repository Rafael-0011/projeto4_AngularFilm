import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilmsService } from '../../service/films.service';
import { ListFilmesComponent } from '../../componente/list-filmes/list-filmes.component';
import { MFilme } from '../../model/m-filme';

@Component({
  selector: 'app-list-film-bem-avaliado',
  imports: [ListFilmesComponent],
  templateUrl: './list-film-bem-avaliado.component.html',
  styleUrl: './list-film-bem-avaliado.component.css',
})
export class ListFilmBemAvaliadoComponent {
  filmesSeriesBemAvaliado: MFilme[] = [];
  titulo = 'Filmes/Series Bem Avaliados';

  constructor(private filmesService: FilmsService) {}

  get serviceFilme() {
    return this.filmesService;
  }

  ngOnInit(): void {
    this.listaFilmesSeriesBemAvaliado();
  }

  listaFilmesSeriesBemAvaliado(): void {
    this.filmesService.getFilmesSeriesBemAvaliado().subscribe((data) => {
      this.filmesSeriesBemAvaliado = data.results;
    });
  }
}
