
import { Component } from '@angular/core';
import { HOJA_DE_VIDA } from './data/hoja-de-vida.data';
import { PerfilComponent } from './perfil/perfil';
import { ContactoComponent } from './contacto/contacto';
import { FormacionComponent } from './formacion/formacion';
import { HabilidadesComponent } from './habilidades/habilidades';
import { ProyectosComponent } from './proyectos/proyectos';


 

@Component({
  selector: 'app-hoja-de-vida',
  standalone: true,
  
imports: [
  PerfilComponent,
  ContactoComponent,
  FormacionComponent,
  HabilidadesComponent,
  ProyectosComponent
],

  templateUrl: './hoja-de-vida.html',
  styleUrl: './hoja-de-vida.scss'
})
export class HojaDeVidaComponent {
  hojaDeVida = HOJA_DE_VIDA;
}




