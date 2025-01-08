import { Routes } from '@angular/router';
import { FilmDetailsComponent } from './pages/film-details/film-details.component';import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: 'filme/:id', component: FilmDetailsComponent },
  { path: '', component: HomeComponent },
];
