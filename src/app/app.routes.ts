
import { Routes } from '@angular/router';
import { AprendizajeComponent } from './pages/aprendizaje/aprendizaje';
import { HojaDeVidaComponent } from './pages/hoja-de-vida/hoja-de-vida';


export const routes: Routes = [
  { path: '', redirectTo: 'hoja-de-vida', pathMatch: 'full' },
  { path: 'aprendizaje', component: AprendizajeComponent },
  { path: 'hoja-de-vida', component: HojaDeVidaComponent },
  { path: '**', redirectTo: 'hoja-de-vida' }
];
