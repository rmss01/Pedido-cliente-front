import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../../Entidad/Cliente';
import { Pedido } from '../../Entidad/Pedido';

@Injectable({
  providedIn: 'root'
})
export class Ws {

  constructor(private http: HttpClient) { }

  //acceso al servidor
  urlCliente = "http://localhost:8002/enucom/cliente";
  urlPedido = "http://localhost:8002/enucom/pedido";

  //crear peticion para listar
  listar(){
    return this.http.get<Cliente []>(this.urlCliente + "/mostrar")
  }

  obtenerPedidos(){
    return this.http.get<Pedido []>(this.urlPedido + "/mostrar")
  }

  guardarCliente(cliente: Cliente){
    return this.http.post<String>(this.urlCliente + "/guardar", cliente);
  }

  guardarPedido(pedido: Pedido){
    return this.http.post<String>(this.urlPedido + "/guardar", pedido);
  }

  buscarC(cliente: Cliente){
    return this.http.post<Cliente>(this.urlCliente + "/buscar", cliente);
  }

  editarC(cliente: Cliente){
    return this.http.put<Cliente>(this.urlCliente + "/editar", cliente);
  }

  eliminarC(cliente: Cliente){
    return this.http.delete<Cliente>(this.urlCliente + "/eliminar", {body:cliente});
  }

  buscarP(pedido: Pedido){
    return this.http.post<Pedido>(this.urlPedido + "/buscar", pedido);
  }

  editarP(pedido: Pedido){
    return this.http.put<Pedido>(this.urlPedido + "/editar", pedido);
  }

  eliminarP(pedido: Pedido){
    return this.http.delete<Pedido>(this.urlPedido + "/eliminar", {body:pedido});
  }
}
