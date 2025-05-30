import { Component, OnInit } from '@angular/core';
import { Ws } from '../../Service/ws';
import { Cliente } from '../../../Entidad/Cliente';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  imports: [],
  templateUrl: './listar.html',
  styleUrl: './listar.css'
})
export class Listar implements OnInit {

  constructor(private service: Ws, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  clientes !: Cliente[];
  clienteEliminar = new Cliente();

  //Invocar a la peticion para que se realice
  listar(){
    this.service.listar().subscribe(respuesta =>{
      console.log(respuesta);
      console.log(JSON.stringify(respuesta));
      this.clientes = respuesta;
    })
  }

  nuevo() {
    this.router.navigate(['guardar']);
  }

  editar(idEditar: number) {
    localStorage.setItem('idCliente', idEditar.toString());
    this.router.navigate(['editar']);
  }

  eliminar(idEliminar: number) {
    this.clienteEliminar.idCliente = idEliminar
    Swal.fire({
      title: "ELIMINAR?",
      text: "seguro que desa eliminar el cliente " + idEliminar + "?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminarC(this.clienteEliminar).subscribe(result => {
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
