import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../templates/cabecalho/cabecalho.component';
import { ListFilmBemAvaliadoComponent } from '../../templates/list-film-bem-avaliado/list-film-bem-avaliado.component';
import { ListFilmPopularComponent } from '../../templates/list-film-popular/list-film-popular.component';

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
