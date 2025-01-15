import { Component } from '@angular/core';
import { MostraListaFilmesComponent } from '../../../shared/componente/mostra-lista-filmes/mostra-lista-filmes.component';
import { HeadComponent } from '../../../shared/templates/head/head.component';


@Component({
  selector: 'app-home',
  imports: [MostraListaFilmesComponent, HeadComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
 

}
