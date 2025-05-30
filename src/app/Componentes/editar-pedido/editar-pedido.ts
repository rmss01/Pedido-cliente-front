import { Component, OnInit } from '@angular/core';
import { Ws } from '../../Service/ws';
import { Router } from '@angular/router';
import { Pedido } from '../../../Entidad/Pedido';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Cliente } from '../../../Entidad/Cliente';

@Component({
  selector: 'app-editar-pedido',
  imports: [FormsModule],
  templateUrl: './editar-pedido.html',
  styleUrl: './editar-pedido.css'
})
export class EditarPedido implements OnInit {

  constructor(private service: Ws, private router: Router) {
  }

  pedido = new Pedido();
  fechaFormateada: string = "";
 

  ngOnInit(): void {
    //alert(localStorage.getItem('idPedido'));
    this.pedido.clienteID = new Cliente();
    this.buscar();
  }

  buscar() {
    this.pedido.idPedido = Number(localStorage.getItem('idPedido'));
    this.service.buscarP(this.pedido).subscribe(data => {
      console.log(JSON.stringify(data));
      this.pedido = data;

      const fecha = new Date(this.pedido.fecha);

      const yyyy = fecha.getFullYear();
      const mm = String(fecha.getMonth() + 1).padStart(2, '0'); // getMonth() es base 0
      const dd = String(fecha.getDate()).padStart(2, '0');

      this.fechaFormateada = `${yyyy}-${mm}-${dd}`;

      
    })
    console.log(this.pedido);

  }

  editar(){
    this.pedido.fecha = new Date(this.fechaFormateada);

    this.service.editarP(this.pedido).subscribe(response =>{
      Swal.fire(
              {
                title: "EDITAR",
                text:JSON.stringify(response),
                showConfirmButton: false,
                timer: 3000,
                icon: 'success'
              }
            );
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
