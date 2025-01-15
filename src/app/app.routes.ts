import { Routes } from '@angular/router';
import { FilmDetailsComponent } from './modules/pages/film-details/film-details.component';
import { HomeComponent } from './modules/pages/home/home.component';


export const routes: Routes = [
  { path: 'filme/:id', component: FilmDetailsComponent },
  { path: '', component: HomeComponent },
];
