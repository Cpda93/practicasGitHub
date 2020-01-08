import { Component, Input } from '@angular/core';
import { DeseosService } from '../app/services/deseos.service';
import { AgregarPage } from '../pages/agregar/agregar.component';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { Lista } from '../models/lista.model';

@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
})

export class ListasComponent{
    @Input() terminada:  boolean = false; 
    constructor (public deseosService: DeseosService,
        private navCtrl: NavController,
        private alertCtrl: AlertController){
    }
    listaSeleccionada(lista: Lista){
        this.navCtrl.push( AgregarPage, {
            titulo: lista.titulo,
            lista: lista
         } );
        console.log( lista );
    }
    borrarLista(lista: Lista){
        this.deseosService.borrarLista( lista );
    }
    editarLista(listas: Lista, slidingItem: ItemSliding){
        slidingItem.close();
        const alerta = this.alertCtrl.create({
            title: 'Editar alumno',
            message: 'Escriba el nombre completo del alumno',
            inputs: [{
                    name: 'titulo',
                    placeholder: 'Nombre de alumno',value: listas.titulo
            }],
            buttons:[{
                text: 'Cancelar'
            },{
                text: 'Guardar',
                handler: data =>{
                    if(data.titulo.length === 0){
                        return;
                    }
                    listas.titulo = data.titulo;
                    this.deseosService.guardarStorage();
                }
            }]
        });
        alerta.present();
    }
}