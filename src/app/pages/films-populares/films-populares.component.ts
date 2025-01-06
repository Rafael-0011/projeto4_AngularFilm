import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../componente/cabecalho/cabecalho.component';
import { ListFilmBemAvaliadoComponent } from '../../componente/list-film-bem-avaliado/list-film-bem-avaliado.component';
import { ListFilmPopularComponent } from '../../componente/list-film-popular/list-film-popular.component';

@Component({
  selector: 'app-films-populares',
  imports: [
    CabecalhoComponent,
    ListFilmBemAvaliadoComponent,
    ListFilmPopularComponent,
  ],
  templateUrl: './films-populares.component.html',
  styleUrl: './films-populares.component.css',
})
export class FilmsPopularesComponent {}
