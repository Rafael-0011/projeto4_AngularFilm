import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { MFilme } from '../../model/m-filme';

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
    const url = `${environment.URL_BASE}/${environment.URL_TRENDING}`;
    return this.http.get<{ results: MFilme[] }>(url, this.header());
  }

  getFilmesSeriesBemAvaliado(): Observable<{ results: MFilme[] }> {
    const url = `${environment.URL_BASE}/${environment.URL_TOP_RATED}`;
    return this.http.get<{ results: MFilme[] }>(url, this.header());
  }

  getPesquisa(pesquisa: string): Observable<{ results: MFilme[] }> {
    const url = `${environment.URL_BASE}/${environment.URL_GETNAME_FILME_PARTE1}${pesquisa}${environment.URL_GETNAME_FILME_PARTE2}`;
    return this.http.get<{ results: MFilme[] }>(url, this.header());
  }

  getIdFilme(id: string): Observable<MFilme> {
    const url = `${environment.URL_BASE}/movie/${id}?language=pt-BR`;
    return this.http.get<MFilme>(url, this.header());
  }

  qoute = new BehaviorSubject(true);
  currentQuote = this.qoute.asObservable();
  updateQuote(newQuote: boolean) {
    this.qoute.next(newQuote);
  }

  falseBanner = new BehaviorSubject(true);
  currentBanner = this.falseBanner.asObservable();
  falseBannerUpdate(newQuote: boolean) {
    this.falseBanner.next(newQuote);
  }
}
