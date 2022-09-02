import { Pipe, PipeTransform } from '@angular/core';
import { infoFases, Jugador } from '../interfaces/interfaces';
import { InfoFasesService } from '../services/info-fases.service';

@Pipe({
  name: 'visorFase'
})
export class VisorFasePipe implements PipeTransform {

  infoArray!: infoFases[];

  constructor( private info: InfoFasesService ){
    this.infoArray = this.info.infoFases;
    // console.log(this.infoArray);
  }

  transform(value: Jugador ) {

    const nivel: string = 'n' + value;

    for( let item of this.infoArray ){

      if( item.id === nivel ){
        return item.tit;
      } 
    }

    return 'Saiyan Ultra Instinto';
  }

}
