import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BannersDosFilmesComponent } from '../banners-dos-filmes/banners-dos-filmes.component';
import { RouterLink } from '@angular/router';
import { MFilme } from '../../model/m-filme';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-filmes',
  imports: [BannersDosFilmesComponent, RouterLink, CommonModule],
  templateUrl: './list-filmes.component.html',
  styleUrl: './list-filmes.component.css',
})
export class ListFilmesComponent {
  @Input() listFilms: MFilme[] = [];
  logoUrl = `${environment.URL_IMG}`;
  @Input() titulo!: string;

  @Input() customListStyles: { [key: string]: string } = {};

  @Output() filmClick: EventEmitter<void> = new EventEmitter();

  onFilmClick(): void {
    this.filmClick.emit();

    
    const topElement = document.getElementById('app-cabecalho');

    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
