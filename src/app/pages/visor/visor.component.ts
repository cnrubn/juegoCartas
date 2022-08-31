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

  jugador!: any;
  cartasJugando: Carta[] = []; 

  restablecer: boolean = false;

  @Output() iniciadoJuego = new EventEmitter<boolean>();


  // @Output()  emisor = new EventEmitter<string>();


  constructor( private sv: JuegoServiciosService,
               private fasesService: FasesJuegoService ) { }

  ngOnInit(): void {

    // this.jugador = this.sv.jugador;
    // console.log(this.jugador)

    // console.log( this.iniciadoJuego )

    if( localStorage.getItem( 'jugador' ) ){
      this.jugador = JSON.parse( localStorage.getItem( 'jugador' )! );
    } else {
      this.jugador = this.sv.jugador;
    }

    // this.sv.jugador.intentos = 0;
    
    
  }


  ngDoCheck() {
    
    console.log('entra');
    

      if( localStorage.getItem( 'jugador' ) ){
        this.jugador = JSON.parse( localStorage.getItem( 'jugador' )! );



      
      }


    
  }
  
  

  inicioJuego(){
    // this.cartasJugando = this.fasesService.inicioJuego();

    // return this.iniciadoJuego = true;

    
    // this.fasesService.inicioJuego();

    console.log('iniciado');
    
    // console.log(this.cartasJugando)

    this.iniciadoJuego.emit(true);





    

    
  }


  restablecerJuego(){
    // localStorage.removeItem('jugador');


    this.fasesService.fase_Restablecer();
    
    // this.sv.jugador.intentos = 0;

    // return this.restablecer = true;
  }
  
}
