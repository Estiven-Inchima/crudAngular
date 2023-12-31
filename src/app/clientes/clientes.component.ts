import { Component, OnInit } from '@angular/core';
import { Cliente} from './cliente';
import { ClienteService } from './cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent  {
  clientes: Cliente[];

  constructor(private clienteService: ClienteService){

    
  
    this.clienteService.getClientes().subscribe(
     clientes => this.clientes = clientes
      );
    this.clientes=[]
    

  }
 
  delete(cliente: Cliente): void{
    swal.fire({
      title: "Está seguro?",
      text: "Se eliminara el cliente!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "si, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.delete(cliente.id).subscribe(
          response => {
            this.clientes = this.clientes.filter(cli => cli !== cliente) 
          }
        )



        swal.fire({
          title: "Eliminado!",
          text: "Eliminado con éxito.",
          icon: "success"
        });
      }
    });

    
  }

  

}
