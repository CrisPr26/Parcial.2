
import { Component } from '@angular/core';

interface Videojuego {
  nombre: string;
  genero: string;
  plataforma: string;
  descripcion: string;
  icono: string;
}

@Component({
  selector: 'app-tema-libre',
  standalone: true,
  imports: [],
  templateUrl: './tema-libre.html',
  styleUrl: './tema-libre.scss'
})
export class TemaLibreComponent {

  videojuegos: Videojuego[] = [
    {
      nombre: 'Minecraft',
      genero: 'Aventura y construcción',
      plataforma: 'PC y consolas',
      descripcion: 'Permite explorar mundos, construir estructuras y utilizar la creatividad.',
      icono: '🧱'
    },
    {
      nombre: 'Rocket League',
      genero: 'Deportes',
      plataforma: 'PC y consolas',
      descripcion: 'Combina el fútbol con vehículos que permiten realizar jugadas y competir.',
      icono: '🚗'
    },
    {
      nombre: 'Super Mario',
      genero: 'Plataformas',
      plataforma: 'Consolas Nintendo',
      descripcion: 'Es una serie de videojuegos de aventura en la que se superan niveles y obstáculos.',
      icono: '🍄'
    },
    {
      nombre: 'The Legend of Zelda',
      genero: 'Aventura',
      plataforma: 'Consolas Nintendo',
      descripcion: 'Ofrece exploración, resolución de acertijos y aventuras en mundos fantásticos.',
      icono: '🗡️'
    },
    {
      nombre: 'EA Sports FC',
      genero: 'Deportes',
      plataforma: 'PC y consolas',
      descripcion: 'Permite jugar partidos de fútbol y administrar equipos en diferentes modos.',
      icono: '⚽'
    },
    {
      nombre: 'Among Us',
      genero: 'Estrategia y multijugador',
      plataforma: 'PC y dispositivos móviles',
      descripcion: 'Es un juego de cooperación y deducción en el que los jugadores deben descubrir al impostor.',
      icono: '🚀'
    }
  ];

  categorias: string[] = [
    'Aventura',
    'Deportes',
    'Construcción',
    'Estrategia',
    'Plataformas'
  ];

}

