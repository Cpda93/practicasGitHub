import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ){ }

  transform( value: string, url: string): any {
    //  BORRAR LA DELARACION DE LA URL DE ARRIBA Y CREAR UNA CONSTANTE PARA HACER EL DOM
    // MAS LIMPIO, SE QUEDA COMO EJEMPLO DE HACER UN TRABAJO MAS LIMPIO CON LA LINEA DE ARRBA
    // const url = 'https://open.spotify.com/embed/track/';
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value );
  }

}
