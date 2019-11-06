import { Component } from '@angular/core';
import { DeseosService } from '../../app/services/deseos.service';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
    
})
export class PendientesPage{
    constructor( public deseosService: DeseosService){
        
    }
}