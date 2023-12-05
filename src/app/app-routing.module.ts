import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './clientes/form.component';

const routes: Routes = [//rutas
  {path:'',redirectTo:'/clientes', pathMatch:'full'},
  {path:'directivas',component: DirectivaComponent},
  {path:'clientes', component: ClientesComponent},
  {path:'clientes/form', component: FormComponent}, //creamos la ruta para el formulario
  {path:'clientes/form/:id', component: FormComponent}//esta ruta contiene el parametro :id y va a estar mapeado al form compoenent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
