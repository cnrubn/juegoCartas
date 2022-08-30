import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  iniciadoJuego!: boolean;

  emisor!: any;

  constructor() { }

  ngOnInit(): void {

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
