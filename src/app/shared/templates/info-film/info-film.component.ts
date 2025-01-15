import { Component, ElementRef } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { MFilme } from '../../../model/m-filme';

import { FilmsService } from '../../../core/service/films.service';

@Component({
  selector: 'app-info-film',
  templateUrl: './info-film.component.html',
  styleUrl: './info-film.component.css',
  standalone:false

})
export class InfoFilmComponent {
  bannerUrl = `${environment.URL_IMG}`;
  filmsDetails: MFilme[] = [];

  alterarStatus = true;

  constructor(
    private filmesService: FilmsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.obterId()
    console.log("altera staus",this.alterarStatus);
    this.alterarStatusbanner()
  }

  obterId() {
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

  alterarStatusbanner(){
    this.filmesService.currentBanner.subscribe((newStatus)=>{
      this.alterarStatus = newStatus;
    })
  }
}
