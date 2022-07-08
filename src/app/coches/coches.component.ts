import { Component } from "@angular/core";
import { Coche } from "./coches";
import { PeticionesService } from "../services/peticiones.service";

@Component({
    selector: 'coches',
    templateUrl : './coches.component.html',
    providers: [PeticionesService]
})

export class CochesComponent{

    public coche: Coche;
    public coches: Array<Coche>;
    public articulos: any;  //yhe power of js

    constructor(
        private _peticionesService: PeticionesService
    ){
        this.coche =  new Coche("", "", "");
        this.coches = [
            new Coche("Seat Panda", "120", "Blanco"),
            new Coche("Renault Clio", "110", "Azul")
        ];

        this.articulos = [];
    }

    ngOnInit(){

        //https://stackoverflow.com/questions/66742322/angular-11-subscribe-is-deprecated-use-an-observer-instead-of-a-complete-call
        console.log(this._peticionesService.getPrueba());
        this._peticionesService.getArticulos()
        .subscribe(
            {
                    next: data =>{
                    debugger;
                    this.articulos = data;
                },
                error: errorMessage => {
                    console.log(errorMessage);
                }
            }
    )
        
        // .subscribe((data: any)=>{
        //     console.log(data);
        // },(errorEvent)=>{

        // })
        // this._peticionesService.getArticulos().subscribe(
        //     result => {

        //         console.log(result);
        //     }, 
        //     error => {
        //         var errorMessage = <any>error;
        //         console.log(errorMessage);

        //     }
        // )
    }

    onSubmit(){
       
        this.coches.push(this.coche);
        this.coche =  new Coche("", "", "");
    }
}