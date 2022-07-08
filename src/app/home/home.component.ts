import { Component } from "@angular/core";
import { RopaService } from "../services/ropa.service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService] // this can be injected on app.module.ts on providers section module
  })

  export class HomeComponent {

    public titulo = "Pagina principal";
    public listado_ropa: string[] = [];
    public prenda_a_guardar : string = "";

    public fecha;
    public nombre : string =  "JUAN Lopez MarTInez"

    constructor(private _ropaService: RopaService){
        this.fecha = new Date(2022,0,7);
    }

    ngOnInit(){
        this.listado_ropa = this._ropaService.getRopa();
        console.log(this.listado_ropa);
    }

    guardarPrenda(){

        if (this.prenda_a_guardar == "")
            return; 

        this.listado_ropa =
        this._ropaService.addRopa(this.prenda_a_guardar);

        this.prenda_a_guardar = "";
    }

    eliminarPrenda(index: number)
    {
        this.listado_ropa = this._ropaService.deleteRopa(index);

    }

  }
