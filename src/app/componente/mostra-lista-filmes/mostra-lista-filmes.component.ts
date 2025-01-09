import { Component } from '@angular/core';
import { MFilme } from '../../model/m-filme';
import { FilmsService } from '../../service/films.service';
import { ListFilmesComponent } from "../list-filmes/list-filmes.component";

@Component({
  selector: 'app-mostra-lista-filmes',
  imports: [ListFilmesComponent],
  templateUrl: './mostra-lista-filmes.component.html',
  styleUrl: './mostra-lista-filmes.component.css',
})
export class MostraListaFilmesComponent {
  filmesBemAvaliado: MFilme[] = [];
  filmesPopulares: MFilme[] = [];

  tituloFilmesBemAvaliado = 'Filmes/Series Bem Avaliados';

  constructor(private filmesService: FilmsService) {}

  get serviceFilme() {
    return this.filmesService;
  }

  ngOnInit(): void {
    this.listaFilmesSeriesBemAvaliado();
    this.handleListaFilmesPopulares();
  }

  listaFilmesSeriesBemAvaliado(): void {
    this.filmesService.getFilmesSeriesBemAvaliado().subscribe((data) => {
      this.filmesBemAvaliado = data.results;
    });
  }

  tituloFilmesPopulares = 'Filmes Populares';

  handleListaFilmesPopulares(): void {
    this.filmesService.getFilmesSeriesAlta().subscribe((data) => {
      this.filmesPopulares = data.results;
    });
  }
}
