import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MFilme } from '../../../model/m-filme';
import { FilmsService } from '../../../core/service/films.service';
import { BaseModule } from '../../base/base.module';

@Component({
  selector: 'app-head',
  imports: [BaseModule],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css',
})
export class HeadComponent {
  filmsPesquisado: MFilme[] = [];
  pesquisa!: string;
  showFilms: boolean = false;
  isVisible = true;


  constructor(private filmesService: FilmsService, private router: Router) {}

  ngOnInit(): void {
  // this.alteraStatusPesquisa();
   this.filmesService.currentQuote.subscribe((quote) => {
    this.isVisible = quote;
  });  

  }

  get serviceFilme() {
    return this.filmesService;
  }

  onPesquisaChange(updatedPesquisa: string): void {
    this.pesquisa = updatedPesquisa;
  }

  onFilmsChange(updatedFilms: MFilme[]): void {
    this.filmsPesquisado = updatedFilms;
  }
  
  alteraStatusPesquisa(){
    this.filmesService.currentQuote.subscribe((quote) => {
      this.isVisible = quote;
    });
  }
}
