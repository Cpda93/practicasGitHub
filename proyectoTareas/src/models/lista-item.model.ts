export class ListaItem {
    descripcion: string;
    completado: boolean;
    constructor( constructorDescripcion: string ){
        this.descripcion = constructorDescripcion;
        this.completado = false;
    }
}