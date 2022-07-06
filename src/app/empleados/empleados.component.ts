import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'empleado-tag',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {


  public titulo : string = "Componente empleados";
  public empleado: Empleado;
  public trabajadores: Array<Empleado>;
  public trabajador_externo: boolean;
  public color : string;

  constructor() {
    this.empleado =  new Empleado("Rolando", 29, "Sr developer", true);
    this.trabajadores = [
      new Empleado("Manolo", 29, "Sr developer", false),
      new Empleado("Ivonne", 26, "Psicologa", true),
      new Empleado("Pepe", 18, "Becario", false)

    ];

    this.trabajador_externo = true;
    this.color = "red";

   }


   cambiarExterno (valor: boolean)
   {
      this.trabajador_externo =  valor;

   }

  ngOnInit() {
    
  }

}
