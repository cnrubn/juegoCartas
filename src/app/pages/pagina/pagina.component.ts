import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { JuegoServiciosService } from 'src/app/services/juego-servicios.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  iniciadoJuego!: boolean;

  emisor!: any;

  constructor( private sv: JuegoServiciosService ) { }

  ngOnInit(): void {

    this.sv.getJugadorLocalStorage();

    
    // console.log( this.emisor )
    
  }

  iniciadoJuegoVisor( event: boolean ){

    this.iniciadoJuego = event;
    console.log(event)

    setTimeout(() => {
      this.iniciadoJuego = false;


      
    }, 5000 );

  }

}
