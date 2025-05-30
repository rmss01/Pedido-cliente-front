import { Cliente } from "./Cliente";

export class Pedido{
    idPedido !: number;
    fecha !: Date;
    total !: number;
    status !: String;
    clienteID !: Cliente;
}