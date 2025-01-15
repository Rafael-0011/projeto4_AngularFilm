import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from '../componente/cabecalho/cabecalho.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { RouterLink } from '@angular/router';
import { MostraListaFilmesComponent } from '../componente/mostra-lista-filmes/mostra-lista-filmes.component';
import { ListFilmesComponent } from '../componente/list-filmes/list-filmes.component';
import { BannersDosFilmesComponent } from '../componente/banners-dos-filmes/banners-dos-filmes.component';
import { InfoFilmComponent } from '../templates/info-film/info-film.component';

@NgModule({
  declarations: [
    CabecalhoComponent,
    ListFilmesComponent,
    BannersDosFilmesComponent,
    InfoFilmComponent,
  ],
  imports: [CommonModule, FormsModule, FormsModule, RouterLink, PrimeNgModule],

  exports: [
    CabecalhoComponent,
    ListFilmesComponent,
    BannersDosFilmesComponent,
    InfoFilmComponent,
  ],
})
export class BaseModule {}
