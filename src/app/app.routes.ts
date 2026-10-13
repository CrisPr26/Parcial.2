
import { Routes } from '@angular/router';
import { AprendizajeComponent } from './pages/aprendizaje/aprendizaje';
import { HojaDeVidaComponent } from './pages/hoja-de-vida/hoja-de-vida';
import { TemaLibreComponent } from './pages/tema-libre/tema-libre';


export const routes: Routes = [
  { path: '', redirectTo: 'hoja-de-vida', pathMatch: 'full' },
  { path: 'aprendizaje', component: AprendizajeComponent },
  { path: 'tema-libre', component: TemaLibreComponent },
  { path: 'hoja-de-vida', component: HojaDeVidaComponent },
  { path: '**', redirectTo: 'hoja-de-vida' }
];
