import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MFilme } from '../../../model/m-filme';
import { FilmsService } from '../../../core/service/films.service';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css',
  standalone:false
})
export class CabecalhoComponent {
  filmsPesquisado: MFilme[] = [];
  pesquisa: string = '';
  showFilms: boolean = false;

  @Output() pesquisaChange: EventEmitter<string> = new EventEmitter();
  @Output() filmsPesquisadoChange: EventEmitter<MFilme[]> = new EventEmitter();

  constructor(private filmesService: FilmsService) {}

  isVisible = true;

  ngOnInit(): void {
    this.filmesService.currentQuote.subscribe((quote) => {
      this.isVisible = quote;
    });
  }

  get serviceFilme() {
    return this.filmesService;
  }

  handlePesquisas(): void {
    if (this.pesquisa) {
      this.filmesService.getPesquisa(this.pesquisa).subscribe((data) => {
        this.filmsPesquisado = data.results;
        this.showFilms = this.filmsPesquisado.length > 0;
        this.serviceFilme.updateQuote(true);
        this.serviceFilme.falseBannerUpdate(false);
        this.pesquisaChange.emit(this.pesquisa);
        this.filmsPesquisadoChange.emit(this.filmsPesquisado);
      });
    } else {
      this.filmsPesquisado = [];
      this.showFilms = false;
      this.serviceFilme.updateQuote(false);
      this.serviceFilme.falseBannerUpdate(true);

      this.pesquisaChange.emit(this.pesquisa);
      this.filmsPesquisadoChange.emit(this.filmsPesquisado);
    }
  }
}
