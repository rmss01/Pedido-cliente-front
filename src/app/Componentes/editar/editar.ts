import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../Entidad/Cliente';
import { Ws } from '../../Service/ws';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  imports: [FormsModule],
  templateUrl: './editar.html',
  styleUrl: './editar.css'
})
export class Editar implements OnInit{

  constructor(private service: Ws, private router: Router){

  }
  cliente = new Cliente();

  ngOnInit(): void {
      //alert(localStorage.getItem('idCliente'));
      this.buscar();
  }

  buscar(){
    this.cliente.idCliente = Number(localStorage.getItem('idCliente'));
    this.service.buscarC(this.cliente).subscribe(data =>{
      console.log(JSON.stringify(data));
      this.cliente = data;
    })
    console.log(this.cliente);

  }

  editar(){
    this.service.editarC(this.cliente).subscribe(data =>{
      Swal.fire(
        {
          title: "EDITAR",
          text:JSON.stringify(data),
          showConfirmButton: false,
          timer: 3000,
          icon: 'success'
        }
      );
      this.router.navigate(['listar']);
    })
  }

}
