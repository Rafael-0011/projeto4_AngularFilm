import { Component } from '@angular/core';
import { MFilme } from '../../../model/m-filme';
import { FilmsService } from '../../../core/service/films.service';
import { BaseModule } from '../../base/base.module';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'app-mostra-lista-filmes',
  imports: [BaseModule,Carousel],
  templateUrl: './mostra-lista-filmes.component.html',
  styleUrl: './mostra-lista-filmes.component.css',
})
export class MostraListaFilmesComponent {
  filmesBemAvaliado: MFilme[] = [];
  filmesPopulares: MFilme[] = [];

  
  constructor(private filmesService: FilmsService) {}

  get serviceFilme() {
    return this.filmesService;
  }

  ngOnInit(): void {
    this.listaFilmesSeriesBemAvaliado();
    this.handleListaFilmesPopulares();
  }

  tituloFilmesBemAvaliado = 'Filmes/Series Bem Avaliados';

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
