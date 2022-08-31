import { Component, DoCheck, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
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

  constructor( private sv: JuegoServiciosService,
               private info: InfoFasesService,
               private secuencia: SecuenciaJuegoService  ) { }

  ngOnInit(): void {

    this.sv.getJugadorLocalStorage();

    
    // console.log( this.emisor )

    this.activo = this.secuencia.secuenciaJuego();
    
  }



  iniciadoJuegoVisor( event: boolean ){

    this.iniciadoJuego = event;
    // console.log(event)

    setTimeout(() => {
      this.iniciadoJuego = false;


      
    }, 5000 );

  }

  iniciadoJuegoReglas( event: any ){
    // console.log(event);
    this.activo = true;
  }

  restablecerJuego( event: any ){
    // console.log(event);
    // console.log('reset');
    this.activo = false;
  }

}
