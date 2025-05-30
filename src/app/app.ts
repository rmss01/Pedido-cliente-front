import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'CRUDClientePedido';

  constructor(private router:Router){
  }

  listar(){
    this.router.navigate(['listar']);
  }

  pedidos(){
    this.router.navigate(['pedidos'])
  }
}
