import { Component } from '@angular/core';
import { DeseosService } from '../../app/services/deseos.service';
import { Lista } from '../../models/lista.model';
import { NavController, AlertController, Button } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
    
})
export class PendientesPage{
    constructor( public deseosService: DeseosService,
                 private navCtrl: NavController,
                 private alertCtrl: AlertController){
        
    }
   

    agregarLista(){
       // this.navCtrl.push(AgregarPage);
       const alerta = this.alertCtrl.create({
           title: 'Agregar alumno',
           message: 'Escriba el nombre completo del alumno',
           inputs: [{
                   name: 'titulo',
                   placeholder: 'Nombre de alumno'
           }],
           buttons:[{
               text: 'Cancelar'
           },{
               text: 'Agregar',
               handler: data =>{
                   if(data.titulo.length === 0){
                       return;
                   }
                   this.navCtrl.push(AgregarPage,{
                       titulo: data.titulo
                    });
               }
           }]
       });
       alerta.present();
    }
}