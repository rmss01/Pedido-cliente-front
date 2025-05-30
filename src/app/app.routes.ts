
import { Routes } from '@angular/router';
import { Listar } from './Componentes/listar/listar';
import { Pedidos } from './Componentes/pedidos/pedidos';
import { Guardar } from './Componentes/guardar/guardar';
import { NuevoPedido } from './Componentes/nuevo-pedido/nuevo-pedido';
import { Editar } from './Componentes/editar/editar';
import { EditarPedido } from './Componentes/editar-pedido/editar-pedido';


export const routes: Routes = [
    {
        path: 'listar',
        component:Listar
    },

    {
        path: 'pedidos',
        component:Pedidos
    },
    {
        path: 'guardar',
        component:Guardar
    },
    {
        path: 'nuevoPedido',
        component:NuevoPedido
    },
    {
        path: 'editar',
        component:Editar
    },
    {
        path: 'editarPedido',
        component:EditarPedido
    }
];
