
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.scss'
})
export class ProyectosComponent {
  @Input() proyectos: string[] = [];
}

