import { Injectable } from '@angular/core';
import { Carta, Jugador } from '../interfaces/interfaces';
import { JuegoServiciosService } from './juego-servicios.service';

@Injectable({
  providedIn: 'root'
})
export class FasesJuegoService {

  cartasJugando: Carta[] = [];
  iniciadoJuego: boolean = false;
  jugador!: any;

  siguienteNivel: boolean = false;


  constructor( private sv: JuegoServiciosService ) { }


  // inicioJuego(){

    // this.cartasJugando = this.sv.paso1Size();

    // console.log(this.cartasJugando)

    // this.iniciadoJuego = true;


    // return this.cartasJugando;

    // return console.log('servicio');
    
  // }
  
  fase1_ObtenerCartas(){
    return this.sv.paso1Size();
  }

  fase2_Comprobación( num1: number, num2: number, cartas: Carta[] ){

    this.cartasJugando = cartas;

    
    const carta1: any = this.cartasJugando[ num1 ].id;
    const carta2: any = this.cartasJugando[ num2 ].id;

    // this.jugador = this.sv.getJugador();

    this.jugador = this.sv.getJugadorLocalStorage();
    
    console.log( 'jugador::',this.jugador)
    // console.log(this.cartasJugando)
    // console.log({carta1,carta2})


    // COMPROBACIONES

    let acierto: boolean = false;

    if( carta1 === carta2 ){
      // console.log('¡Genial, cartas iguales!')


      

      for( let carta of this.cartasJugando ){
        if( carta1 === carta.id ){
          carta.clickado = true;
        }
      }

      // console.log(this.cartasJugando);

      
      return acierto = true;

    } else {
      // console.log('¡Ohh, cartas distintas!')

      this.jugador.intentos++;

      this.sv.guardarJugadorLocalStorage();

      

      return acierto;

      
    }



  }

  fase3_NivelCompleto() {

    const puntos: number = 100 - ( this.jugador.intentos * 5)

    this.jugador.puntos = this.jugador.puntos + puntos; 
    this.jugador.intentos = 0; 
    this.jugador.nivel++;

    console.log('this.jugador::', this.jugador)


    this.sv.guardarJugadorLocalStorage();
    
    for( let carta of this.cartasJugando ){
        carta.clickado = false;
    }


    // this.fase1_ObtenerCartas();

  } 

  fase_Restablecer(){

    console.log('restablecer')

    this.sv.jugador = {
      nombre: '',
      puntos: 0,
      intentos: 0,
      nivel: 0
    }

    this.sv.guardarJugadorLocalStorage()

  }
  
}
