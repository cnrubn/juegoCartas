import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carta, Jugador } from 'src/app/interfaces/interfaces';
import { FasesJuegoService } from 'src/app/services/fases-juego.service';
import { JuegoServiciosService } from 'src/app/services/juego-servicios.service';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {

  jugador!: Jugador;
  cartasJugando: Carta[] = []; 

  @Output() iniciadoJuego = new EventEmitter<boolean>();


  // @Output()  emisor = new EventEmitter<string>();


  constructor( private sv: JuegoServiciosService,
               private fasesService: FasesJuegoService ) { }

  ngOnInit(): void {

    this.jugador = this.sv.jugador;
    // console.log(this.jugador)

    // console.log( this.iniciadoJuego )

    
    
  }

  inicioJuego(){
    // this.cartasJugando = this.fasesService.inicioJuego();

    // return this.iniciadoJuego = true;

    
    // this.fasesService.inicioJuego();

    console.log('iniciado');
    
    // console.log(this.cartasJugando)

    this.iniciadoJuego.emit(true);

    

    
  }
  
}
