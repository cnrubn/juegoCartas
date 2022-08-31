import { Injectable } from '@angular/core';
import { infoFases } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoFasesService {

  infoFases: infoFases[] = [
    {
      id: 1,
      tit: 'Bienvenido, introduce tu nombre...',
    },
    {
      id: 2,
      tit: 'Reglas de juego...',
      txt: `<div><p>txt</p><p>txt</p></div>`,
      img: 'assets/img/placeholder.png'
    },
    {
      id: 2,
      tit: 'Nivel 1',
      txt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      img: 'assets/img/placeholder.png',
      titPubli: 'titPubli',
      txtPubli: 'string;',
      imgPubli: 'assets/img/placeholder.png'
    },
    {
      id: 2,
      tit: 'Nivel 2',
      txt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      img: 'assets/img/placeholder.png',
      titPubli: 'titPubli',
      txtPubli: 'string;',
      imgPubli: 'assets/img/placeholder.png'
    },
    {
      id: 2,
      tit: 'Nivel 3',
      txt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      img: 'assets/img/placeholder.png',
      titPubli: 'titPubli',
      txtPubli: 'string;',
      imgPubli: 'assets/img/placeholder.png'
    },
    {
      id: 2,
      tit: 'Nivel 4',
      txt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      img: 'assets/img/placeholder.png',
      titPubli: 'titPubli',
      txtPubli: 'string;',
      imgPubli: 'assets/img/placeholder.png'
    },
    {
      id: 2,
      tit: 'Nivel 5',
      txt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      img: 'assets/img/placeholder.png',
      titPubli: 'titPubli',
      txtPubli: 'string;',
      imgPubli: 'assets/img/placeholder.png'
    },
  ];

  constructor() { }
}
