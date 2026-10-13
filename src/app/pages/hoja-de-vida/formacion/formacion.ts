
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formacion',
  standalone: true,
  imports: [],
  templateUrl: './formacion.html',
  styleUrl: './formacion.scss'
})
export class FormacionComponent {
  @Input() formacion: string[] = [];
}

