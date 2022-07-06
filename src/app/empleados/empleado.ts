export class Empleado {

    // public nombre;
    // public edad;

    // constructor(nombre : string, edad : 22){

    //     this.nombre = nombre;
    //     this.edad = edad;
    // }
    //THIS IS EQUIVALENT TO THIS ->

    constructor(
        public nombre: string, 
        public edad: number, 
        public cargo: string, 
        public contratado: boolean){}
}