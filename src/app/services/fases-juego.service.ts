import { Injectable } from '@angular/core';
import { Carta, Jugador } from '../interfaces/interfaces';
import { JuegoServiciosService } from './juego-servicios.service';
import { SecuenciaJuegoService } from './secuencia-juego.service';

@Injectable({
  providedIn: 'root'
})
export class FasesJuegoService {

  cartasJugando: Carta[] = [];
  iniciadoJuego: boolean = false;
  jugador!: any;
  siguienteNivel: boolean = false;


  constructor( private sv: JuegoServiciosService,
               private secuencia: SecuenciaJuegoService  ) { }

  
  fase1_ObtenerCartas(){
    return this.sv.paso1Size();
  }

  fase2_Comprobación( num1: number, num2: number, cartas: Carta[] ){

    this.cartasJugando = cartas;

    const carta1: any = this.cartasJugando[ num1 ].id;
    const carta2: any = this.cartasJugando[ num2 ].id;

    this.jugador = this.sv.getJugadorLocalStorage();

    // COMPROBACIONES
    let acierto: boolean = false;

    if( carta1 === carta2 ){

      for( let carta of this.cartasJugando ){
        if( carta1 === carta.id ){
          carta.clickado = true;
        }
      }

      return acierto = true;

    } else {

      this.jugador.intentos++;
      this.sv.guardarJugadorLocalStorage();

      return acierto;
    }

  }

  fase3_NivelCompleto() {

    let puntos: number = 100 - ( this.jugador.intentos * 5)

    if( puntos < 0 ){
      puntos = 0;
    }

    this.jugador.puntos = this.jugador.puntos + puntos; 
    this.jugador.intentos = 0; 
    this.jugador.nivel++;

    this.sv.guardarJugadorLocalStorage();
    
    for( let carta of this.cartasJugando ){
        carta.clickado = false;
    }
  } 

  fase_Restablecer(){

    this.sv.jugador = {
      nombre: '',
      puntos: 0,
      intentos: 0,
      nivel: 0
    }

    this.sv.guardarJugadorLocalStorage()

  }
  
}
