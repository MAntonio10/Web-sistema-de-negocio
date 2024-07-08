import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';

import { CategoriasComponent } from './categorias/categorias.component';
import { ProductosComponent } from './productos/productos.component';
import { ClientesComponent } from './clientes/clientes.component';

import { VentaComponent } from './venta/venta.component';

import { DetalleventaComponent } from './detalleventas/detalleventas.component';
import { DevolucionesComponent } from './devoluciones/devoluciones.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CategoriaDialogComponent } from './categoria-dialog/categoria-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { EditCategoriaComponent } from './edit-categoria/edit-categoria.component';
import { ProductoDialogComponent } from './productos-dialog/productos-dialog.component';
import { EditProductoComponent } from './edit-producto/edit-producto.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProveedoresDialogComponent } from './proveedores-dialog/proveedores-dialog.component';
import { EditProveedoresComponent } from './edit-proveedores/edit-proveedores.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { AlmacenDialogComponent } from './almacen-dialog/almacen-dialog.component';
import { EditAlmacenComponent } from './edit-almacen/edit-almacen.component';
import { DevolucionesDialogComponent } from './devoluciones-dialog/devoluciones-dialog.component';
import { EditDevolucionesComponent } from './edit-devoluciones/edit-devoluciones.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonasDialogComponent } from './personas-dialog/personas-dialog.component';
import { EditPersonasComponent } from './edit-personas/edit-personas.component';
import { DetalleventaDialogComponent } from './detalleventa-dialog/detalleventa-dialog.component';
import { EditDetalleventaComponent } from './edit-detalleventa/edit-detalleventa.component';
import { ClientesDialogComponent } from './clientes-dialog/clientes-dialog.component';
import { EditClientesComponent } from './edit-clientes/edit-clientes.component';
import { TipoclienteComponent } from './tipocliente/tipocliente.component';
import { TipoempleadoComponent } from './tipoempleado/tipoempleado.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { TipoclienteDialogComponent } from './tipocliente-dialog/tipocliente-dialog.component';
import { EmpleadoDialogComponent } from './empleado-dialog/empleado-dialog.component';
import { TipoempleadoDialogComponent } from './tipoempleado-dialog/tipoempleado-dialog.component';
import { EditTipoclienteComponent } from './edit-tipocliente/edit-tipocliente.component';
import { EditTipoempleadoComponent } from './edit-tipoempleado/edit-tipoempleado.component';
import { EditEmpleadoComponent } from './edit-empleado/edit-empleado.component';
import { VentaDialogComponent } from './venta-dialog/venta-dialog.component';
import { EditVentaComponent } from './edit-venta/edit-venta.component';
import { SignupComponent } from './signup/signup.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    CategoriasComponent,
    ProductosComponent,
    ClientesComponent,
    VentaComponent,
    DetalleventaComponent,
    DevolucionesComponent,
    CategoriaDialogComponent,
    EditCategoriaComponent,
    ProductoDialogComponent,
    EditProductoComponent,
    ProveedoresComponent,
    ProveedoresDialogComponent,
    EditProveedoresComponent,
    AlmacenComponent,
    AlmacenDialogComponent,
    EditAlmacenComponent,
    DevolucionesDialogComponent,
    EditDevolucionesComponent,
    PersonasComponent,
    PersonasDialogComponent,
    EditPersonasComponent,
    DetalleventaDialogComponent,
    EditDetalleventaComponent,
    ClientesDialogComponent,
    EditClientesComponent,
    TipoclienteComponent,
    TipoempleadoComponent,
    EmpleadoComponent,
    TipoclienteDialogComponent,
    EmpleadoDialogComponent,
    TipoempleadoDialogComponent,
    EditTipoclienteComponent,
    EditTipoempleadoComponent,
    EditEmpleadoComponent,
    VentaDialogComponent,
    EditVentaComponent,
    SignupComponent
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatSortModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
