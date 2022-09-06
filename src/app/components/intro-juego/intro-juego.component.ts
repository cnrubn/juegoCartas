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

  @Output() siguienteEtapa = new EventEmitter<boolean>();
  
  jugador!: Jugador;
  infoFases!: infoFases[];
  infoMostrar!: infoFases;

  constructor( private sv: JuegoServiciosService,
               private secuencia: SecuenciaJuegoService,
               private info: InfoFasesService  ) { }

  ngOnInit(): void {

    this.infoFases = this.info.infoFases;

    this.jugador = this.sv.getJugadorLocalStorage();

    if( this.jugador.nivel === 0 ){

      this.infoMostrar = this.infoFases[0];

    } else if( this.jugador.nivel > 0 && this.jugador.nivel <= 5 ) {

      let nivel: string = 'n' + this.jugador.nivel;

      for( let msg in this.infoFases ){
        if( nivel === this.infoFases[msg].id ){

          this.infoMostrar = this.infoFases[msg];
          this.activaIntro = false;
          this.activaReglas = false;
          this.activaNiveles = true;
        } 
      }

      
    } else {
      this.infoMostrar = this.infoFases[8];
      this.activaIntro = false;
      this.activaReglas = false;
      this.activaNiveles = true;
    }
  }

  introNombre( nombre: any ){

    this.nombreIncorrecto = false;

    if( nombre.length < 3 || nombre.length > 10 ){
      this.nombreIncorrecto = true;
      return;
    }

    this.jugador.nombre = nombre;
    this.sv.guardarJugadorLocalStorage();
    this.infoMostrar = this.infoFases[1];
    this.activaIntro = false;
    this.activaReglas = true;
    
  }

  siguienteReglas(){

    this.siguienteEtapa.emit(true);
  }



}
