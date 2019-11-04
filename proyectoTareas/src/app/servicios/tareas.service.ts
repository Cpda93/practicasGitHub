import { Injectable } from '@angular/core';

@Injectable()
    // DeseosService esta declarado en app.module.ts para poder usarlo en la aplicacion de angular
 export class DeseosService{
     constructor(){
         console.log(" Servicio Deseos Listo ")
     }
    }
