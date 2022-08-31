import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { infoFases, Jugador } from 'src/app/interfaces/interfaces';
import { InfoFasesService } from 'src/app/services/info-fases.service';
import { JuegoServiciosService } from 'src/app/services/juego-servicios.service';
import { SecuenciaJuegoService } from 'src/app/services/secuencia-juego.service';

@Component({
  selector: 'app-intro-juego',
  templateUrl: './intro-juego.component.html',
  styleUrls: ['./intro-juego.component.css']
})
export class IntroJuegoComponent implements OnInit {
  activaIntro: boolean = true;
  activaReglas: boolean = false;
  activaNiveles: boolean = false;

  nombreIncorrecto: boolean = false;

  jugador!: Jugador;

  infoFases!: infoFases[];

  infoMostrar!: infoFases;


  @Output() siguienteEtapa = new EventEmitter<boolean>();

  constructor( private sv: JuegoServiciosService,
               private secuencia: SecuenciaJuegoService,
               private info: InfoFasesService  ) { }

  ngOnInit(): void {

    // console.log('this.infoMostrar');

    this.infoFases = this.info.infoFases;

    this.jugador = this.sv.getJugadorLocalStorage();

    if( this.jugador.nivel === 0 ){

      this.infoMostrar = this.infoFases[0];

    } else if( this.jugador.nivel > 0 && this.jugador.nivel <= 5 ) {

      let nivel: string = 'n' + this.jugador.nivel;

      for( let msg in this.infoFases ){
        if( nivel === this.infoFases[msg].id ){
          // console.log( ' msg', msg)
          // console.log( 'objeto', this.infoFases[msg])
          this.infoMostrar = this.infoFases[msg];

          this.activaIntro = false;
          this.activaReglas = false;
          this.activaNiveles = true;
          
          
        } 
      }

      
    } else {
      this.infoMostrar = this.infoFases[7];

      this.activaIntro = false;
      this.activaReglas = false;
      this.activaNiveles = true;


    }




  }

  introNombre( nombre: any ){

    this.nombreIncorrecto = false;

    if( nombre.length < 3 ){
      this.nombreIncorrecto = true;
      return;
    }

    // this.jugador = this.sv.getJugadorLocalStorage();
    this.jugador.nombre = nombre;
    this.sv.guardarJugadorLocalStorage();

    this.infoMostrar = this.infoFases[1];


    this.activaIntro = false;
    this.activaReglas = true;
    
    // console.log(this.infoMostrar);
    
  }

  siguienteReglas(){
    // this.activaReglas = false;

    this.siguienteEtapa.emit(true);

  }

}
