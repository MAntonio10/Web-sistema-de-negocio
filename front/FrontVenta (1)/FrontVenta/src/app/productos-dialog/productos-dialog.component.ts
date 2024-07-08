import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-producto-dialog',
  templateUrl: './productos-dialog.component.html',
  styleUrls: ['./productos-dialog.component.css']
})
export class ProductoDialogComponent {
  productoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private router: Router
  ) {
    this.productoForm = this.fb.group({
      categoria_Id_Categoria: ['', Validators.required],
      proveedor_Id_Proveedor: ['', Validators.required],
      almace_Id_Almacen: ['', Validators.required],
      nombre_producto: ['', Validators.required],
      precio: ['', Validators.required],
      stock: ['', Validators.required],
      descripcion: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.productoForm.valid) {
      const nuevoProducto: Producto = this.productoForm.value;
      this.productoService.postProducto(nuevoProducto).subscribe(producto => {
        console.log('Producto agregado:', producto);
        this.router.navigate(['/productos']);
      }, error => {
        console.error('Error al agregar el producto', error);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/productos']);
  }
}
