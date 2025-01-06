import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banners-dos-filmes',
  imports: [],
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
