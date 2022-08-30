import { Component, DoCheck, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Carta } from 'src/app/interfaces/interfaces';
import { FasesJuegoService } from 'src/app/services/fases-juego.service';
import { JuegoServiciosService } from 'src/app/services/juego-servicios.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit, DoCheck, OnChanges {

  cartasJugando!: Carta[];
  @Input() iniciadoJuego!: boolean;

  completadoNivel: boolean = false;

  constructor( private sv: JuegoServiciosService,
               private fasesServicios: FasesJuegoService ) {}

  ngOnInit(): void {

    // this.cartas = this.sv.paso1Size();

    // this.iniciadoJuego;

    // console.log( 'iniciadoJuego', this.iniciadoJuego);
    
  }

  ngDoCheck(){
    // this.cartasJugando;
    console.log( 'ngDoCheck', this.iniciadoJuego);

    if( this.iniciadoJuego || this.completadoNivel ){
      console.log('>>> EStoy dentro.')
    }



    

  }

  ngOnChanges() {

    console.log( 'this.iniciadoJuego', this.iniciadoJuego);
    console.log( 'this.completadoNivel', this.completadoNivel);

    if( this.iniciadoJuego ){
      // console.log( 'Llamado fase 1')
      
      this.cartasJugando = this.fasesServicios.fase1_ObtenerCartas();

      // console.log( 'cartasJugando', this.cartasJugando)


      this.iniciadoJuego = false;
      

    }

    console.log(this.completadoNivel);


  }


  completadoNivelEvent( event: boolean ){

    this.completadoNivel = event;
    console.log( 'event', event)

    // this.nuevoNivel()

    // this.iniciadoJuego = false;




    // if( this.completadoNivel ){
      // console.log( 'Llamado fase 1')
      
      // this.cartasJugando = this.fasesServicios.fase1_ObtenerCartas();

      this.iniciadoJuego = true;

      console.log( 'cartasJugando', this.iniciadoJuego)

    // }
    
    

  }

  // nuevoNivel() {
  //   console.log('>> Nuevo nivel...');

  //   this.cartasJugando = [];

    // if( this.iniciadoJuego ){
    //   this.cartasJugando = this.fasesServicios.fase1_ObtenerCartas();

    // }

  //   console.log('this.cartasJugando NUevo', this.cartasJugando);


  // }

}
