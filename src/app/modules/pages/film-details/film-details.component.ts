import { Component } from '@angular/core';
import { MostraListaFilmesComponent } from '../../../shared/componente/mostra-lista-filmes/mostra-lista-filmes.component';
import { HeadComponent } from '../../../shared/templates/head/head.component';
import { InfoFilmComponent } from '../../../shared/templates/info-film/info-film.component';


@Component({
  selector: 'app-film-details',
  imports: [InfoFilmComponent, MostraListaFilmesComponent, HeadComponent],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.css',
})
export class FilmDetailsComponent {}
