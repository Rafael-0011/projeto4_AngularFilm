import { Component, ElementRef } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BannersDosFilmesComponent } from '../../componente/banners-dos-filmes/banners-dos-filmes.component';
import { FilmsService } from '../../service/films.service';
import { ActivatedRoute } from '@angular/router';
import { MFilme } from '../../model/m-filme';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-film',
  imports: [BannersDosFilmesComponent, CommonModule],
  templateUrl: './info-film.component.html',
  styleUrl: './info-film.component.css',
})
export class InfoFilmComponent {
  bannerUrl = `${environment.URL_IMG}`;
  filmsDetails: MFilme[] = [];

  constructor(
    private filmesService: FilmsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const idfilm = params.get('id');
      if (idfilm) {
        this.filmesService.getIdFilme(idfilm).subscribe((data) => {
          this.filmsDetails = [data];
          console.log('Detalhes do filme:', this.filmsDetails);
        });
      }
    });
  }
}
