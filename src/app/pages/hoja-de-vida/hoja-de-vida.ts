
import { Component } from '@angular/core';
import { HOJA_DE_VIDA } from './data/hoja-de-vida.data';

@Component({
  selector: 'app-hoja-de-vida',
  standalone: true,
  imports: [],
  templateUrl: './hoja-de-vida.html',
  styleUrl: './hoja-de-vida.scss'
})
export class HojaDeVidaComponent {
  hojaDeVida = HOJA_DE_VIDA;
}




