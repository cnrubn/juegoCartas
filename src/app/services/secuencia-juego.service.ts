import { Injectable } from '@angular/core';
import { Jugador } from '../interfaces/interfaces';
import { JuegoServiciosService } from './juego-servicios.service';

@Injectable({
  providedIn: 'root'
})
export class SecuenciaJuegoService {

  jugador!: Jugador;

  constructor( private sv: JuegoServiciosService) { }

  secuenciaJuego(){

    this.jugador = this.sv.getJugadorLocalStorage();

    if( this.jugador.nombre!.length > 0 ){
      // console.log('hay nombre');
      return true;
    } else {

      // console.log('no hay nombre');
      return false;
    }

    // console.log(this.jugador);
    
  }
}
