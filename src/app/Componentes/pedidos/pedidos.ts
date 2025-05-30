import { Component, OnInit } from '@angular/core';
import { Ws } from '../../Service/ws';
import { Pedido } from '../../../Entidad/Pedido';
import { Router } from '@angular/router';
import { NuevoPedido } from '../nuevo-pedido/nuevo-pedido';
import { elementAt } from 'rxjs';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedidos',
  imports: [CommonModule],
  templateUrl: './pedidos.html',
  styleUrl: './pedidos.css'
})
export class Pedidos implements OnInit{

  constructor (private servicio: Ws, private router: Router){}

  ngOnInit(): void {
    this.listar();
  }

  pedidos !: Pedido [];
  pedidoEliminar = new Pedido();

  listar(){
    this.servicio.obtenerPedidos().subscribe(respuesta => {
      //console.log(JSON.stringify(respuesta));
      this.pedidos = respuesta;
    })
    
  }

  nuevo(){
    this.router.navigate(['nuevoPedido']);
  }

  editar(idPedidoEditar: number){
    localStorage.setItem("idPedido", idPedidoEditar.toString());
    this.router.navigate(['editarPedido']);
  }

  eliminar(idPedidoEliminar: number){
    this.pedidoEliminar.idPedido = idPedidoEliminar;

    Swal.fire({
          title: "ELIMINAR?",
          text: "seguro que desa eliminar el cliente " + idPedidoEliminar + "?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, eliminar"
        }).then((result) => {
          if (result.isConfirmed) {
            this.servicio.eliminarP(this.pedidoEliminar).subscribe(result => {
              Swal.fire({
                title: "Eliminado!",
                icon: "success"
              });
              this.listar();
              
            },
              error => {
                Swal.fire({
                  title: "Error",
                  text: JSON.stringify(error.error.mensaje),
                  icon: "error",
                  timer: 3500
                });
              }
    
            );
    
    
    
          }
        });
  }
}
