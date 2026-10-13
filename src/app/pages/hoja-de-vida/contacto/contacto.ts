
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss'
})
export class ContactoComponent {
  @Input() correo = '';
  @Input() telefono = '';
  @Input() ciudad = '';
}

