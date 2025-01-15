import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { BannersDosFilmesComponent } from '../banners-dos-filmes/banners-dos-filmes.component';
import { RouterLink } from '@angular/router';
import { MFilme } from '../../../model/m-filme';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { FilmsService } from '../../../core/service/films.service';

@Component({
  selector: 'app-list-filmes',
  imports: [BannersDosFilmesComponent, RouterLink, CommonModule, CardModule],
  templateUrl: './list-filmes.component.html',
  styleUrl: './list-filmes.component.css',
})
export class ListFilmesComponent {
  logoUrl = `${environment.URL_IMG}`;

  @Input() listFilms: MFilme[] = [];
  @Input() titulo!: string;

  @Input() customListStyles: { [key: string]: string } = {};

  @Output() filmClick: EventEmitter<void> = new EventEmitter();

  constructor(private filmesService: FilmsService) {}

  onFilmClick(): void {
    this.filmClick.emit();
    this.filmesService.falseBannerUpdate(true);
    const topElement = document.getElementById('app-cabecalho');

    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
