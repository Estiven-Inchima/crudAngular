import { Component } from '@angular/core';
import { Cliente} from './cliente';
import { ClienteService } from './cliente.service';
import { Router,ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {

  public cliente: Cliente = new Cliente("","","","","");
  public titulo:string = "Crear Cliente";

  constructor(private clienteService: ClienteService, private router: Router,private activatedRoute: ActivatedRoute){ 
  }

  ngOnInit(){
    this.cargarCliente();
  }

  //para crear cliente
  public create(): void{
    this.clienteService.create(this.cliente).subscribe(
      response => {
      this.router.navigate(['/clientes'])//reedirigimos a clientes cuando se guarde
        swal.fire('Nuevo cliente', `Cliente ${this.cliente.nombre} creado con exito!`,'success')//esto es para mostrar un mensaje cuando se guarde
      
    });
    
  }

  //para traer el id del cliente que queremos editar
  cargarCliente():void{
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe( (cliente) => this.cliente=cliente )
      }
    })
  }

  //para actualizar o editar el cliente y enviar a la backend
  update():void{
    this.clienteService.update(this.cliente)
    .subscribe( cliente => {
        this.router.navigate(['/clientes'])
        swal.fire('cliente Actualizado',`Cliente ${cliente.nombre} actualizado con éxito!`,'success') 
    })
  }








}
