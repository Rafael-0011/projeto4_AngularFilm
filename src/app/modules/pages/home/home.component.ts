import { Component } from '@angular/core';
import { HeadComponent } from '../../../shared/templates/head/head.component';
import { BaseModule } from '../../../shared/base/base.module';
import { MostraListaFilmesComponent } from "../../../shared/componente/mostra-lista-filmes/mostra-lista-filmes.component";


@Component({
  selector: 'app-home',
  imports: [HeadComponent, BaseModule, MostraListaFilmesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent {
 

}
