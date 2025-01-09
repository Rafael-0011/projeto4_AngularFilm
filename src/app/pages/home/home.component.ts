import { Component } from '@angular/core';
import { CabecalhoComponent } from "../../templates/cabecalho/cabecalho.component";
import { MostraListaFilmesComponent } from "../../componente/mostra-lista-filmes/mostra-lista-filmes.component";


@Component({
  selector: 'app-home',
  imports: [CabecalhoComponent, MostraListaFilmesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
 

}
