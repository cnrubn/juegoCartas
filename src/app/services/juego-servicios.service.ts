import { Injectable } from '@angular/core';
import { Carta, Jugador } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class JuegoServiciosService {

  jugador: Jugador = {
    nombre: '',
    puntos: 0,
    intentos: 0,
    nivel: 0,
  }

  cartasRonda: any[] = [];

  cartas: Carta[] = [
    {
      id: 1,
      nombre: 'Freezer',
      img: 'assets/img-cartas/c1.jpg',
      clickado: false
    },
    {
      id: 2,
      nombre: 'Vegeta',
      img: 'assets/img-cartas/c2.jpg',
      clickado: false
    },
    {
      id: 3,
      nombre: 'Célula',
      img: 'assets/img-cartas/c3.jpg',
      clickado: false
    },
    {
      id: 4,
      nombre: 'Mr. Satán',
      img: 'assets/img-cartas/c4.jpg',
      clickado: false
    },
    {
      id: 5,
      nombre: 'Goku',
      img: 'assets/img-cartas/c5.png',
      clickado: false
    },
    {
      id: 6,
      nombre: 'Piccolo',
      img: 'assets/img-cartas/c6.jpg',
      clickado: false
    },
    {
      id: 7,
      nombre: 'Boo',
      img: 'assets/img-cartas/c7.jpg',
      clickado: false
    },
    {
      id: 8,
      nombre: 'Krilin',
      img: 'assets/img-cartas/c8.jpg',
      clickado: false
    },
    {
      id: 9,
      nombre: 'Goku',
      img: 'assets/img-cartas/c9.jpg',
      clickado: false
    },
    {
      id: 10,
      nombre: 'Gohan',
      img: 'assets/img-cartas/c10.jpg',
      clickado: false
    },
  ]

  constructor() { 

    this.getJugadorLocalStorage();
    this.jugador.intentos = 0;
    this.guardarJugadorLocalStorage();

  }

  getJugador(){
    return this.jugador;
  }

  getJugadorLocalStorage(){

    if( localStorage.getItem( 'jugador' ) ){
      this.jugador = JSON.parse( localStorage.getItem( 'jugador' )! );
    } 
    return this.jugador;
  }

  guardarJugadorLocalStorage() {

    localStorage.setItem( 'jugador', JSON.stringify( this.jugador ) );
    return this.jugador;
  }

  
  paso1Size(){
    // Según el nivel de jugador hay 3 posibles tableros de juegos. Aquí se selecciona el nº de elementos que vamos a necesitar.
    let numCartas: number;
    
    if( this.jugador.nivel <= 1 ){
      numCartas = 6;
    } else if( this.jugador.nivel > 1 && this.jugador.nivel <= 4 ){
      numCartas = 8;
    } else {
      numCartas = 10;
    }

    return this.paso2Seleccionadas( numCartas );
  }

  paso2Seleccionadas( num: number ) {
    // A continuación se construye un array con id de carta únicos.
    let cartasSeleccionadas: number[] = [];
    let numRandom: number;
    let unica: boolean = true;
    let numCartas: number = num;

    for( let i = 0; cartasSeleccionadas.length < numCartas; i++){

      numRandom = Math.floor(Math.random() * ( 10 - 0 ) + 0 );

      if( cartasSeleccionadas.length === 0 ){
        cartasSeleccionadas.push(numRandom);
        unica = false;
      }

      for( let numR of cartasSeleccionadas){

        if( numR === numRandom ){
          unica = false;
        } 
      }

      if( unica ){
        cartasSeleccionadas.push(numRandom);
      }

      unica = true;
      
    }

    return this.paso3CompletarObjeto( cartasSeleccionadas );

  }


  paso3CompletarObjeto( num: number[] ){

    let array: number[] = num.concat(num);

    // Genera aleatoriedad en las posiciones que ocupan cada elemento del array.
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    // Con el array completo ahora falta convertirlo en la colección de objetos con los datos de cada carta.
    this.cartasRonda = [];
    
    for( let carta of array){
      this.cartasRonda.push(this.cartas[carta]);
    }

    return this.cartasRonda;
  }
}
