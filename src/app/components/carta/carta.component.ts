import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carta } from 'src/app/interfaces/interfaces';
import { FasesJuegoService } from 'src/app/services/fases-juego.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  @Input() cartas!: Carta[];
  arrayRef: number[] = [];

  tiempoError: boolean = false;

  click1: number = -1;
  click2: number = -1;

  respuestaServicio: boolean = false;

  arrayClickados: number[] = [];

  @Output() completadoNivel = new EventEmitter<boolean>();


  constructor( private fasesServicios: FasesJuegoService ) { }

  ngOnInit(): void {
    
  }

  cartaSeleccionada( carta: Carta, i: number ){

    

    // console.log( 'this.cartas',this.cartas );
    // console.log( 'this.arrayClickados',this.arrayClickados );


    // console.log( 'INICIO click1', this.click1);
    // console.log( 'INICIO click2', this.click2);

    for( let num of this.arrayClickados ){
      if( num === i || num === this.click2 ){
        return;
      }
    }
    
    

    if( this.click1 === -1 && this.click2 === -1 ){
      this.click1 = i;

      // console.log('asignación 1');
      return;

    } else if( this.click1 !== -1 && this.click2 === -1 ) {
      this.click2 = i;

      this.respuestaServicio = this.fasesServicios.fase2_Comprobación( this.click1, this.click2, this.cartas );

    } else {
      return;
    }




    // INTENTO FALLIDO


    if( !this.respuestaServicio ){
      this.tiempoError = true;
    }
    
    
    setTimeout(() => {

      if( !this.respuestaServicio ){
        this.click1 = -1;
        this.click2 = -1;
  
        // console.log('reset');
        this.tiempoError = false;
        
      }
      
    }, 2000 );

    // INTENTO ACERTADO

    if( this.respuestaServicio ){
      // console.log('>> Éxito');
      // console.log(this.click1);
      // console.log(this.click2);

      this.arrayClickados.push( this.click1, this.click2)

      // console.log(this.arrayClickados);

      this.click1 = -1;
      this.click2 = -1;

    }
    

    
    
    if( this.arrayClickados.length === this.cartas.length ){
      // console.log('completo')


      
      this.arrayClickados = [];
      this.cartas = [];
      
      this.completadoNivel.emit(true);
      this.fasesServicios.fase3_NivelCompleto();
      
    }


    
  }

}
