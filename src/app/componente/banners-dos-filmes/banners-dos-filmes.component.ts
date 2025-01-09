import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-banners-dos-filmes',
  imports: [CardModule],
  templateUrl: './banners-dos-filmes.component.html',
  styleUrl: './banners-dos-filmes.component.css',
})
export class BannersDosFilmesComponent {
  @Input() bannerUrl!: string;
  @Input() title!: string;
  @Input() name!: string;

  get displayTitle(): string {
    return this.title || this.name;
  }
}
