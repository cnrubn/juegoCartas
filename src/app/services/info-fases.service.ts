import { Injectable } from '@angular/core';
import { infoFases } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoFasesService {

  infoFases: infoFases[] = [
    {
      id: 'input',
      tit: 'Escribe tu nombre de guerrero/a, adelante_',
    },
    {
      id: 'reglas',
      tit: 'Instrucciones de juego...',
      txt: `<ul>
              <li>Ya no hay vuelta atrás, es momento de entrenar para ser un Super Saiyan.</li>
              <li>Pulsa el botón "Jugar" en la siguiente pantalla para iniciar el juego.</li>
              <li>El objetivo es identificar las parejas de cartas en el menor número de intentos posibles. Cuanto menos intentos necesites mayor fuerza alcanzarás.</li>
              <li>Muy atento al pulsar "Jugar", dispondrás de tan solo unos pocos segundos para memorizar la posición de todas las cartas.</li>
              <li>Adelante. ¿Eres capaz de hacer un perfecto?</li>
            </ul>`,
      img: 'assets/img/placeholder.png'
    },
    {
      id: 'n0',
      tit: 'Aspirante a Saiyan',
      txt: '',
      img: 'assets/img-logros/logo-db.jpg',
      titPubli: '',
      txtPubli: '',
      imgPubli: ''
    },
    {
      id: 'n1',
      tit: 'Saiyan',
      txt: 'Bien hecho, primer paso dado, pero todavía te queda mucho camino por recorrer.',
      img: 'assets/img-logros/logo-1.jpg',
      titPubli: 'Portfolio',
      txtPubli: 'Mis grandes éxitos te esperan_',
      imgPubli: 'assets/img-promo/Portfolio.jpg',
      urlPubli: 'https://cnrubn.github.io/'
    },
    {
      id: 'n2',
      tit: 'Super Saiyan',
      txt: 'Ya conoces el juego, ¡aumentemos la dificultad!',
      img: 'assets/img-logros/logo-2.jpg',
      titPubli: 'Linkedin',
      txtPubli: 'Si te está gustando recuerda que esto lo hago para encontrar empleo, visita mi perfil, gracias.',
      imgPubli: 'assets/img-promo/linkedin.png',
      urlPubli: 'https://www.linkedin.com/in/carrionweb/'
    },
    {
      id: 'n3',
      tit: 'Super Saiyan God',
      txt: 'Estás a medio camino, no te rindas ahora, ¡adelante!',
      img: 'assets/img-logros/logo-3.png',
      titPubli: 'Top Cine',
      txtPubli: '¿No sabes que ver hoy?, te lo pongo fácil_',
      imgPubli: 'assets/img-promo/trending.png',
      urlPubli: 'https://topcine.netlify.app/trending'
    },
    {
      id: 'n4',
      tit: 'Super Saiyan Blue',
      txt: 'Solo estás a un paso de convertirte en el guerreo más poderoso jamás conocido, ¡vamos!',
      img: 'assets/img-logros/logo-4.png',
      titPubli: 'Toma Nota',
      txtPubli: '¿Sin nada a mano para tomar notas? Solución:',
      imgPubli: 'assets/img-promo/notas.png',
      urlPubli: 'https://notes-perfect.netlify.app/'
    },
    {
      id: 'n5',
      tit: 'Saiyan Ultra Instinto',
      txt: 'Has alcanzado el mayor poder, ¡felicidades!',
      img: 'assets/img-logros/logo-5.jpg',
      titPubli: 'Github',
      txtPubli: 'Este y otros proyectos están disponibles en GitHub_',
      imgPubli: 'assets/img-promo/github-logo.png',
      urlPubli: 'https://github.com/cnrubn'
    },
    {
      id: 'superior5',
      tit: 'Saiyan Ultra Instinto',
      txt: 'Sigue adelante, juega cuanto quieras.',
      img: 'assets/img-logros/logo-5.jpg',
      titPubli: 'Portfolio',
      txtPubli: 'Mis grandes éxitos te siguen esperan_',
      imgPubli: 'assets/img-promo/Portfolio.jpg',
      urlPubli: 'https://cnrubn.github.io/'
    },
  ];

  constructor() { }
}
