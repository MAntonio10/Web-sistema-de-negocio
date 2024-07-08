import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { VentaComponent } from './venta/venta.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProductosComponent } from './productos/productos.component';
import { ClientesComponent } from './clientes/clientes.component';

import { DetalleventaComponent } from './detalleventas/detalleventas.component';
import { DevolucionesComponent } from './devoluciones/devoluciones.component';
import { CategoriaDialogComponent } from './categoria-dialog/categoria-dialog.component';
import { EditCategoriaComponent } from './edit-categoria/edit-categoria.component';
import { ProductoDialogComponent } from './productos-dialog/productos-dialog.component';
import { EditProductoComponent } from './edit-producto/edit-producto.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { EditProveedoresComponent } from './edit-proveedores/edit-proveedores.component';
import { ProveedoresDialogComponent } from './proveedores-dialog/proveedores-dialog.component';
import { EditAlmacenComponent } from './edit-almacen/edit-almacen.component';
import { AlmacenDialogComponent } from './almacen-dialog/almacen-dialog.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonasDialogComponent } from './personas-dialog/personas-dialog.component';
import { EditPersonasComponent } from './edit-personas/edit-personas.component';
import { DevolucionesDialogComponent } from './devoluciones-dialog/devoluciones-dialog.component';
import { EditDevolucionesComponent } from './edit-devoluciones/edit-devoluciones.component';
import { DetalleventaDialogComponent } from './detalleventa-dialog/detalleventa-dialog.component';
import { EditDetalleventaComponent } from './edit-detalleventa/edit-detalleventa.component';
import { VentaDialogComponent } from './venta-dialog/venta-dialog.component';
import { EditVentaComponent } from './edit-venta/edit-venta.component';
import { ClientesDialogComponent } from './clientes-dialog/clientes-dialog.component';
import { EditClientesComponent } from './edit-clientes/edit-clientes.component';
import { TipoclienteDialogComponent } from './tipocliente-dialog/tipocliente-dialog.component';
import { EditTipoclienteComponent } from './edit-tipocliente/edit-tipocliente.component';
import { TipoclienteComponent } from './tipocliente/tipocliente.component';
import { TipoempleadoComponent } from './tipoempleado/tipoempleado.component';
import { TipoempleadoDialogComponent } from './tipoempleado-dialog/tipoempleado-dialog.component';
import { EditTipoempleadoComponent } from './edit-tipoempleado/edit-tipoempleado.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoDialogComponent } from './empleado-dialog/empleado-dialog.component';
import { EditEmpleadoComponent } from './edit-empleado/edit-empleado.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'menu', component: MenuComponent},
    { path: 'ventas', component: VentaComponent},
    { path: 'categorias', component: CategoriasComponent},
    { path: 'productos', component: ProductosComponent},
    { path: 'cliente', component: ClientesComponent},

    { path: 'detalleventa', component: DetalleventaComponent},
    { path: 'devoluciones', component: DevolucionesComponent},
    { path: 'categoria-dialog', component: CategoriaDialogComponent},
    { path: 'edit-categoria/:id', component: EditCategoriaComponent },
    { path: 'productos-dialog', component: ProductoDialogComponent},
    { path: 'edit-producto/:id', component: EditProductoComponent},
    { path: 'proveedores', component: ProveedoresComponent},
    { path: 'proveedores-dialog', component: ProveedoresDialogComponent},
    { path: 'edit-proveedores/:id', component: EditProveedoresComponent},
    { path: 'edit-almacen/:id', component: EditAlmacenComponent},
    { path: 'almacen-dialog', component: AlmacenDialogComponent},
    { path: 'almacen', component: AlmacenComponent},
    { path: 'personas', component: PersonasComponent},
    { path: 'personas-dialog', component: PersonasDialogComponent},
    { path: 'edit-personas/:id', component: EditPersonasComponent},
    { path: 'devoluciones', component: DevolucionesComponent},
    { path: 'devoluciones-dialog', component: DevolucionesDialogComponent},
    { path: 'edit-devoluciones/:id', component: EditDevolucionesComponent},
    { path: 'detalleventa', component: DetalleventaComponent},
    { path: 'detalleventa-dialog', component: DetalleventaDialogComponent},
    { path: 'edit-detalleventa/:id', component: EditDetalleventaComponent},
    { path: 'venta-dialog', component: VentaDialogComponent},
    { path: 'edit-venta/:id', component: EditVentaComponent},
    { path: 'cliente-dialog', component: ClientesDialogComponent},
    { path: 'edit-cliente/:id', component: EditClientesComponent},
    { path: 'tipocliente', component: TipoclienteComponent},
    { path: 'tipocliente-dialog', component: TipoclienteDialogComponent},
    { path: 'edit-tipocliente/:id', component: EditTipoclienteComponent},
    { path: 'tipoempleado', component: TipoempleadoComponent},
    { path: 'tipoempleado-dialog', component: TipoempleadoDialogComponent},
    { path: 'edit-tipoempleado/:id', component: EditTipoempleadoComponent},
    { path: 'empleado', component: EmpleadoComponent},
    { path: 'empleado-dialog', component: EmpleadoDialogComponent},
    { path: 'edit-empleado/:id', component: EditEmpleadoComponent},
    { path: 'signup', component: SignupComponent}
    
    
    
    
    
    
    
    // otras rutas
  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
