import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent {

  public nombre_componente = "Componente de fruta";
  public listado_frutas = "Naranja, manzana, pera y sandia";

  public nombre : string;
  public edad: number;
  public mayordeEdad : boolean;
  public trabajos: Array<any>;
  comodin : any = "Cualquier cosa"

  constructor(){  //Para dar valor a propiedades, es el primero a cargar
    this.trabajos = ['carpintero', 2, 'fontanero'];
    this.nombre = "Daniel";
    this.edad = 29;
    this.mayordeEdad = this.edad >= 18;
    
  }

  ngOnInit() // se ejecuta despues del constructor, se recomienda para ejecutar métodos
  {
    console.log(this.trabajos);
    this.cambiarNombre();

    var uno = 8;
    var dos = 15;

    if (uno === 8){
      let uno = 3; //fuera de el if, este valor no va existir
      var dos = 88;
      console.log ("Dentro del if " + uno);  //Dentro del if 3
    }

    console.log ("Fuera del if " + dos);  //Dentro del if 3

  }

  cambiarNombre (){
    this.nombre = "Rolando";

  }

}
