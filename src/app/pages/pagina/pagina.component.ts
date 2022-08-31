import { Component, DoCheck, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { Jugador } from 'src/app/interfaces/interfaces';
import { InfoFasesService } from 'src/app/services/info-fases.service';
import { JuegoServiciosService } from 'src/app/services/juego-servicios.service';
import { SecuenciaJuegoService } from 'src/app/services/secuencia-juego.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  iniciadoJuego!: boolean;

  reset!: boolean;

  emisor!: any;

  activo: boolean = false;

  testigoRonda: any;

  jugador!: Jugador;




  constructor( private sv: JuegoServiciosService,
               private info: InfoFasesService,
               private secuencia: SecuenciaJuegoService  ) { }

  ngOnInit(): void {

    this.activo = this.secuencia.secuenciaJuego();
    
  }


  iniciadoJuegoVisor( event: boolean ){

    this.iniciadoJuego = event;

    console.log(this.iniciadoJuego);
    console.log(this.activo);

    // setTimeout(() => {
    //   this.iniciadoJuego = false;


      
    // }, 5000 );





  }

  iniciadoJuegoReglas( event: any ){
    this.activo = true;
  }

  restablecerJuego( event: any ){
    this.activo = false;
  }

  
  terminadoRonda( event: any ){

    console.log(event);

    this.activo = false;


  }



}
