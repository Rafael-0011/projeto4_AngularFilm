import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../templates/cabecalho/cabecalho.component';
import { InfoFilmComponent } from '../../templates/info-film/info-film.component';
import { MostraListaFilmesComponent } from "../../componente/mostra-lista-filmes/mostra-lista-filmes.component";

@Component({
  selector: 'app-film-details',
  imports: [CabecalhoComponent, InfoFilmComponent, MostraListaFilmesComponent],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.css',
})
export class FilmDetailsComponent {}
