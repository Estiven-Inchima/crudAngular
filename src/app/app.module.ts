import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { HttpClientModule } from '@angular/common/http';//esto es para poder conectar con el backend
import { FormComponent } from './clientes/form.component'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [//aqui van los componentes
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,//aqui queda registrado y configurado para poder usarlo en la clase service
    AppRoutingModule,
    FormsModule

  ],
  providers: [ClienteService], //aqui van los servicios y son globales por lo que podemos usarlos en diferentes lugares
  bootstrap: [AppComponent]
})
export class AppModule { }
