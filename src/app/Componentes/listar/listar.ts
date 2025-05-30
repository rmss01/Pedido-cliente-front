import { Component, OnInit } from '@angular/core';
import { Ws } from '../../Service/ws';
import { Cliente } from '../../../Entidad/Cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  imports: [],
  templateUrl: './listar.html',
  styleUrl: './listar.css'
})
export class Listar implements OnInit{

  constructor(private service: Ws, private router: Router){}

  ngOnInit(): void {
    this.listar();
  }

  clientes !: Cliente [];

  //Invocar a la peticion para que se realice
  listar(){
    this.service.listar().subscribe(respuesta =>{
      //console.log(JSON.stringify(respuesta));
      this.clientes = respuesta;
    })
  }

  nuevo(){
    this.router.navigate(['guardar']);
  }

}
