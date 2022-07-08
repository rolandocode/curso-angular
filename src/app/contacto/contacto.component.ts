import { Component } from "@angular/core";
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'contacto',
    templateUrl: './contacto.component.html',
  })

  export class ContactoComponent {

    public titulo : string ="Pagina de contacto";
    public parametro : any;

    constructor (
        private _route: ActivatedRoute,
        private _router: Router
        ){

    }

    ngOnInit(){
        var parametr = "";
        this._route.params.forEach((params: Params) =>{
            this.parametro = params['page'];
        });
        


       
    }

    redirigir(){
        this._router.navigate(['/contacto', 'Rolando']);
    }

    redirigir2(){
        this._router.navigate(['/pagina-principal']);
    }
    
    
  }