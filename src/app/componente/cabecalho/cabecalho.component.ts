import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilmsService } from '../../service/films.service';
import { Router, RouterLink } from '@angular/router';
import { ListFilmesComponent } from '../list-filmes/list-filmes.component';
import { MFilme } from '../../model/m-filme';

@Component({
  selector: 'app-cabecalho',
  imports: [FormsModule, RouterLink, ListFilmesComponent],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css',
})
export class CabecalhoComponent {
  filmsPesquisado: MFilme[] = [];
  pesquisa: string = '';
  showFilms: boolean = false;

  constructor(private filmesService: FilmsService, private router: Router) {}

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
        this.filmesService.updateQuote(true);
      });
    } else {
      this.filmsPesquisado = [];
      this.filmesService.updateQuote(false);
    }
  }

  navigateToSearch(): void {
    this.router.navigate(['filme']);
    this.showFilms = true;
  }
}
