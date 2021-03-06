import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
    `]
})
export class TemplateComponent {

  usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "",
    acepta: false
  }
  paises = [
    {
    codigo: "MX",
    nombre: "Mexico"
    },
    {
    codigo: "USA",
    nombre: "Estados Unidos"
    }
  ]
  sexos:string[] = ["Hombre", "Mujer", "Aveces"]

  constructor() { }

  guardar(forma: any){
    // console.log("Se ha guardado el formulario");
    // console.log(forma);
    // console.log("valor: ", forma.value);
    console.log("El usuario es:", this.usuario);
  }
}
