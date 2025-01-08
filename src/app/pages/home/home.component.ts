import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../templates/cabecalho/cabecalho.component';
import { FilmDetailsComponent } from '../film-details/film-details.component';
import { ListFilmBemAvaliadoComponent } from '../../templates/list-film-bem-avaliado/list-film-bem-avaliado.component';
import { ListFilmPopularComponent } from '../../templates/list-film-popular/list-film-popular.component';

@Component({
  selector: 'app-home',
  imports: [CabecalhoComponent,ListFilmBemAvaliadoComponent,ListFilmPopularComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
