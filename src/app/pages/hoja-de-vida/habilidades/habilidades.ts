
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [],
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.scss'
})
export class HabilidadesComponent {
  @Input() habilidades: string[] = [];
}
