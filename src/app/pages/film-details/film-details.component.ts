import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../componente/cabecalho/cabecalho.component';

import { InfoFilmComponent } from '../../componente/info-film/info-film.component';

import { ListFilmPopularComponent } from '../../componente/list-film-popular/list-film-popular.component';
import { ListFilmBemAvaliadoComponent } from '../../componente/list-film-bem-avaliado/list-film-bem-avaliado.component';

@Component({
  selector: 'app-film-details',
  imports: [
    CabecalhoComponent,
    InfoFilmComponent,
    ListFilmPopularComponent,
    ListFilmBemAvaliadoComponent,
  ],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.css',
})
export class FilmDetailsComponent {}
