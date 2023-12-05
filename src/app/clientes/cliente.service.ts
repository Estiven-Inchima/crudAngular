import { Injectable } from '@angular/core';

import { Cliente} from './cliente';
import { of,Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable(/* {
  providedIn: 'root'//con esto ya no registramos este servicio en module.ts pero lo dejo comentado para hacerlo manual
}*/)
export class ClienteService {

  private urlEndPoint:string = 'http://localhost:8080/api/clientes';
  private httpHeaders = new HttpHeaders({'content-Type':'application/json'})
  constructor(private http: HttpClient) { }

  
  
  getClientes(): Observable<Cliente[]>{ 
    return this.http.get(this.urlEndPoint).pipe(
      map( (response) => response as Cliente[] )
    );
  }

 
  //metodo para crear clientes
  create(cliente: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint,cliente,{headers: this.httpHeaders}) 
  }

  //para actualizar cliente
  //1.obtenemos los datos del cliente
  getCliente(id: any): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`)
  }
  //2.actualizamos(este es el metodo para actualizar)
   update(cliente: Cliente): Observable<Cliente>{ 
   return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`,cliente,{headers: this.httpHeaders}) 
  }


  //metodo para eliminar
  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders})
  }



}


