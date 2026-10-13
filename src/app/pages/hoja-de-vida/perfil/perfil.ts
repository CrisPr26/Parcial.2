
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss'
})
export class PerfilComponent {
  @Input() nombre = 'Tu nombre completo';
  @Input() profesion = 'Estudiante de Ingeniería de Sistemas';
  @Input() descripcion = 'Soy estudiante interesado en la programación y el desarrollo de aplicaciones web.';
}
