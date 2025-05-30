import { Component, OnInit } from '@angular/core';
import { Ws } from '../../Service/ws';
import { Pedido } from '../../../Entidad/Pedido';
import { Router } from '@angular/router';
import { NuevoPedido } from '../nuevo-pedido/nuevo-pedido';
import { elementAt } from 'rxjs';
import { CommonModule } from '@angular/common';

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

  listar(){
    this.servicio.obtenerPedidos().subscribe(respuesta => {
      //console.log(JSON.stringify(respuesta));
      this.pedidos = respuesta;
    })
    
  }

  nuevo(){
    this.router.navigate(['nuevoPedido']);
  }
}
