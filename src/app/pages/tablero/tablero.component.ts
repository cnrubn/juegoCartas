import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Carta } from 'src/app/interfaces/interfaces';
import { FasesJuegoService } from 'src/app/services/fases-juego.service';
import { JuegoServiciosService } from 'src/app/services/juego-servicios.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit, OnChanges {

  @Input() iniciadoJuego!: boolean;
  
  @Output() testigoNivel = new EventEmitter<boolean>();

  cartasJugando: Carta[] = [];
  completadoNivel: boolean = false;


  constructor( private sv: JuegoServiciosService,
               private fasesServicios: FasesJuegoService ) {}

  ngOnInit(): void {}


  ngOnChanges() {

    if( this.iniciadoJuego ){

      this.cartasJugando = this.fasesServicios.fase1_ObtenerCartas();

      if( this.iniciadoJuego ){

        for( let carta of this.cartasJugando ){
          carta.clickado = true;
        }
        
        setTimeout(() => {

          for( let carta of this.cartasJugando ){
            carta.clickado = false;
          }
          
        }, 5000 );

        this.iniciadoJuego = false;

      }

      this.iniciadoJuego = false;
    }

  }


  completadoNivelEvent( event: boolean ){

    this.completadoNivel = event;
    this.iniciadoJuego = true;
    this.terminadoRonda();
    
  }

  terminadoRonda(){

    this.testigoNivel.emit(true);

  }
}
