import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MFilme } from '../model/m-filme';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  constructor(private http: HttpClient) {}

  header() {
    return {
      headers: {
        Authorization: `Bearer ${environment.TOKEM_TMDB}`,
      },
    };
  }

  getFilmesSeriesAlta(): Observable<{ results: MFilme[] }> {
    return this.http.get<{ results: MFilme[] }>(
      environment.URL_TRENDING,
      this.header()
    );
  }

  getFilmesSeriesBemAvaliado(): Observable<{ results: MFilme[] }> {
    return this.http.get<{ results: MFilme[] }>(
      environment.URL_TOP_RATED,
      this.header()
    );
  }

  getPesquisa(pesquisa: string): Observable<{ results: MFilme[] }> {
    const url = `${environment.URL_GETNAME_FILME_PARTE1}${pesquisa}${environment.URL_GETNAME_FILME_PARTE2}`;
    return this.http.get<{ results: MFilme[] }>(url, this.header());
  }

  getIdFilme(id: string): Observable<MFilme> {
    const url = `${environment.URL_GET_DETAILS}${id}?language=pt-BR`;
    return this.http.get<MFilme>(url, this.header());
  }

  qoute = new BehaviorSubject(true);

  // expose the BehaviorSubject as an Observable
  currentQuote = this.qoute.asObservable();

  // function to update the value of the BehaviorSubject
  updateQuote(newQuote: boolean) {
    this.qoute.next(newQuote);
  }
}
