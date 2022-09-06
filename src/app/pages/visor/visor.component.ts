import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Carta, Jugador } from 'src/app/interfaces/interfaces';
import { FasesJuegoService } from 'src/app/services/fases-juego.service';
import { JuegoServiciosService } from 'src/app/services/juego-servicios.service';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit, DoCheck {

  @Output() iniciadoJuego = new EventEmitter<boolean>();
  @Output() reset = new EventEmitter<boolean>();

  jugador!: any;
  cartasJugando: Carta[] = []; 
  restablecer: boolean = false;
  visorActivo: boolean = true;


  constructor( private sv: JuegoServiciosService,
               private fasesService: FasesJuegoService ) { }

  ngOnInit(): void {

    if( localStorage.getItem( 'jugador' ) ){
      this.jugador = JSON.parse( localStorage.getItem( 'jugador' )! );
    } else {
      this.jugador = this.sv.jugador;
    }

  }


  ngDoCheck() {
    
    if( localStorage.getItem( 'jugador' ) ){
      this.jugador = JSON.parse( localStorage.getItem( 'jugador' )! );

    }
  }
  
  
  inicioJuego(){
    this.iniciadoJuego.emit(true);
  }

  preRestablecerJuego(){
    this.visorActivo = false;
  }

  cancelar(){
    this.visorActivo = true;
  }


  restablecerJuego(){

    this.fasesService.fase_Restablecer();
    this.reset.emit(true);

  }
  
}
