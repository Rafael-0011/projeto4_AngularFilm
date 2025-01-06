import { Routes } from '@angular/router';
import { FilmDetailsComponent } from './pages/film-details/film-details.component';
import { FilmsPopularesComponent } from './pages/films-populares/films-populares.component';

export const routes: Routes = [
  { path: 'filme/:id', component: FilmDetailsComponent },
  { path: '', component: FilmsPopularesComponent },
];
