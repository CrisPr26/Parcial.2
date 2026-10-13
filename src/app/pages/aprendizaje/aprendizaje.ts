
import { Component } from '@angular/core';

interface TemaCurso {
  nombre: string;
  descripcion: string;
  icono: string;
  tecnologia: string;
}

@Component({
  selector: 'app-aprendizaje',
  standalone: true,
  imports: [],
  templateUrl: './aprendizaje.html',
  styleUrl: './aprendizaje.scss'
})
export class AprendizajeComponent {

  temas: TemaCurso[] = [
    {
      nombre: 'HTML',
      descripcion: 'Aprendí a crear la estructura de una página web.',
      icono: '🌐',
      tecnologia: 'Desarrollo web'
    },
    {
      nombre: 'CSS',
      descripcion: 'Aprendí a aplicar estilos, colores y diseños a las páginas.',
      icono: '🎨',
      tecnologia: 'Diseño web'
    },
    {
      nombre: 'Angular',
      descripcion: 'Aprendí a organizar una aplicación mediante componentes y rutas.',
      icono: '🅰️',
      tecnologia: 'Framework'
    },
    {
      nombre: 'Bootstrap',
      descripcion: 'Aprendí a construir interfaces utilizando clases de diseño.',
      icono: '🧩',
      tecnologia: 'Diseño web'
    },
    {
      nombre: 'Git y GitHub',
      descripcion: 'Aprendí a guardar cambios y administrar versiones del proyecto.',
      icono: '💻',
      tecnologia: 'Control de versiones'
    },
    {
      nombre: 'TypeScript',
      descripcion: 'Aprendí a trabajar con variables, clases e interfaces.',
      icono: '📘',
      tecnologia: 'Programación'
    }
  ];

  conocimientos: string[] = [
    'Crear páginas web',
    'Organizar componentes',
    'Definir rutas de navegación',
    'Utilizar arreglos e interfaces',
    'Mostrar información dinámica',
    'Trabajar con Git y GitHub'
  ];

  actividades: string[] = [
    'Desarrollo de ejercicios prácticos',
    'Creación de una hoja de vida web',
    'Uso de componentes en Angular',
    'Organización y publicación de proyectos'
  ];

}

