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
      return true;
    } else {
      return false;
    }
    
  }
}
