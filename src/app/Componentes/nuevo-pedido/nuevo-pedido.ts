import { Component } from '@angular/core';
import { Ws } from '../../Service/ws';
import { Router } from '@angular/router';
import { Pedido } from '../../../Entidad/Pedido';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../../Entidad/Cliente';

@Component({
  selector: 'app-nuevo-pedido',
  imports: [FormsModule],
  templateUrl: './nuevo-pedido.html',
  styleUrl: './nuevo-pedido.css'
})
export class NuevoPedido {

  constructor(private service: Ws, private router: Router){}

  pedidoNuevo = new Pedido();
  clienteIdSeleccionado: number = -1;

  nuevo(){
    const cliente = new Cliente();
    cliente.idCliente = this.clienteIdSeleccionado;
    this.pedidoNuevo.clienteID = cliente;

    this.service.guardarPedido(this.pedidoNuevo).subscribe(data =>{
      console.log(JSON.stringify(data))
      Swal.fire({
              title: "Guardado",
              text: "Se ha guardado correctamente",
              icon: "success"
            });
            this.router.navigate(['pedidos']);
    },
    error =>{
      console.log(error.error.mensaje);
      Swal.fire({
              title: "Error",
              text: JSON.stringify(error.error.mensaje),
              icon: "error",
              timer: 3500
            });
    }
  
  
  )
  }

}
