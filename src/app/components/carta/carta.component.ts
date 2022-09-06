import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carta } from 'src/app/interfaces/interfaces';
import { FasesJuegoService } from 'src/app/services/fases-juego.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  @Input() cartas: Carta[] = [];

  @Output() completadoNivel = new EventEmitter<boolean>();

  arrayRef: number[] = [];
  tiempoError: boolean = false;
  click1: number = -1;
  click2: number = -1;
  respuestaServicio: boolean = false;
  arrayClickados: number[] = [];


  constructor( private fasesServicios: FasesJuegoService ) { }

  ngOnInit(): void {
    
  }

  cartaSeleccionada( carta: Carta, i: number ){

    for( let num of this.arrayClickados ){
      if( num === i || num === this.click2 ){
        return;
      }
    }


    // Asignación valores a propiedades, para luego comparar.
    if( this.click1 === -1 && this.click2 === -1 ){
      this.click1 = i;
      console.log('primera opci')
      return;

    } else if( this.click1 !== -1 && this.click2 === -1 && this.click1 !== i  ) {
      this.click2 = i;

    } else {
      return;
    }

    // Acierto.
    if( this.click1 !== -1 && this.click2 !== -1 ){
      this.respuestaServicio = this.fasesServicios.fase2_Comprobación( this.click1, this.click2, this.cartas );
    }


    // INTENTO FALLIDO
    if( !this.respuestaServicio ){
      this.tiempoError = true;
    }
    
    setTimeout(() => {

      if( !this.respuestaServicio ){
        this.click1 = -1;
        this.click2 = -1;

        this.tiempoError = false;
      }
      
    }, 1500 );

    // INTENTO ACERTADO. Preparación array con cartas acertadas.
    if( this.respuestaServicio ){

      this.arrayClickados.push( this.click1, this.click2)

      this.click1 = -1;
      this.click2 = -1;

    }
    

    
    // Ronda completa. Reset de propiedades y siguiente pantalla.
    if( this.arrayClickados.length === this.cartas.length ){


      setTimeout(() => {

        this.arrayClickados = [];
        this.cartas = [];
        
        this.completadoNivel.emit(true);
        this.fasesServicios.fase3_NivelCompleto();
        
      }, 1200 );
      
      
    }


    
  }

}
