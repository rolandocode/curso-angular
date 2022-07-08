import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// import { routing, appRoutingWithProviders } from './app-routing.module'; // *** another way to do routes
import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { conversorPipe } from './pipes/conversor.pipe';
import { CochesComponent } from './coches/coches.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [  //directivas, pipes y componentes
    AppComponent,
    FrutaComponent,
    EmpleadosComponent,
    ContactoComponent,
    HomeComponent,
    conversorPipe,
    CochesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // routing,// ***
    FormsModule,
    HttpClientModule
  ],
  providers: [/*appRoutingWithProviders // ****/],
  bootstrap: [AppComponent]
})
export class AppModule { }
