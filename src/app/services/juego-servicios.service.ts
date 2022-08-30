import { Injectable } from '@angular/core';
import { Carta, Jugador } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class JuegoServiciosService {

  jugador: Jugador = {
    nombre: 'Rubén',
    puntos: 0,
    intentos: 0,
    nivel: 0,
  }

  cartasRonda: any[] = [];

  cartas: Carta[] = [
    {
      id: 1,
      nombre: 'Goku',
      img: 'assets/img/placeholder.png',
      clickado: false
    },
    {
      id: 2,
      nombre: 'Goku',
      img: 'assets/img/placeholder.png',
      clickado: false
    },
    {
      id: 3,
      nombre: 'Goku',
      img: 'assets/img/placeholder.png',
      clickado: false
    },
    {
      id: 4,
      nombre: 'Goku',
      img: 'assets/img/placeholder.png',
      clickado: false
    },
    {
      id: 5,
      nombre: 'Goku',
      img: 'assets/img/placeholder.png',
      clickado: false
    },
    {
      id: 6,
      nombre: 'Goku',
      img: 'assets/img/placeholder.png',
      clickado: false
    },
    {
      id: 7,
      nombre: 'Goku',
      img: 'assets/img/placeholder.png',
      clickado: false
    },
    {
      id: 8,
      nombre: 'Goku',
      img: 'assets/img/placeholder.png',
      clickado: false
    },
    {
      id: 9,
      nombre: 'Goku',
      img: 'assets/img/placeholder.png',
      clickado: false
    },
    {
      id: 10,
      nombre: 'Goku',
      img: 'assets/img/placeholder.png',
      clickado: false
    },
  ]

  constructor() { 
    // this.paso1Size();
  }

  getJugador(){
    return this.jugador;
  }




  paso1Size(){
    // Según el nivel de jugador hay 3 posibles tableros de juegos. Aquí se selecciona el nº de elementos que vamos a necesitar.


    let numCartas: number;
    
    if( this.jugador.nivel <= 1 ){
      numCartas = 6;
    } else if( this.jugador.nivel === 4 ){
      numCartas = 10;
    } else {
      numCartas = 8;
    }

    console.log( this.jugador );
    console.log( 'numCartas', numCartas)

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

    console.log( 'cartasSeleccionadas', cartasSeleccionadas)

    return this.paso3CompletarObjeto( cartasSeleccionadas );

  }


  paso3CompletarObjeto( num: number[] ){

    let array: number[] = num.concat(num);

    // Genera aleatoriedad en las posiciones que ocupan cada elemento del array.
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    console.log(array)
    console.log( '>>this.cartasRonda 1', this.cartasRonda )


    // Con el array completo ahora falta convertirlo en la colección de objetos con los datos de cada carta.
    this.cartasRonda = [];

    console.log( '>>this.cartasRonda 2', this.cartasRonda )

    
    for( let carta of array){
      this.cartasRonda.push(this.cartas[carta]);
    }




    console.log( '>>this.cartasRonda', this.cartasRonda )




    return this.cartasRonda;
    
  }



  
  
  
  

  
  
}
