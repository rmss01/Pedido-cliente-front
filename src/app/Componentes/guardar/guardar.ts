import { Component } from '@angular/core';
import { Ws } from '../../Service/ws';
import { Cliente } from '../../../Entidad/Cliente';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guardar',
  imports: [FormsModule],
  templateUrl: './guardar.html',
  styleUrl: './guardar.css'
})
export class Guardar {

  constructor(private service: Ws, private router:Router){}

  //instancia de un cliente
  clienteNuevo = new Cliente();

  guardar(){
    this.service.guardarCliente(this.clienteNuevo).subscribe(data =>{
      console.log(JSON.stringify(data))
      Swal.fire({
        title: "Guardado",
        text: "Se ha guardado correctamente",
        icon: "success"
      });
      this.router.navigate(['listar']);
    },
    error =>{
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
