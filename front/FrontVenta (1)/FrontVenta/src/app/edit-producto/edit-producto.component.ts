import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {
  productoForm: FormGroup;
  productoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productoForm = this.fb.group({
      id_Producto: [{ value: '', disabled: false }],
      categoria_Id_Categoria: ['', Validators.required],
      proveedor_Id_Proveedor: ['', Validators.required],
      almace_Id_Almacen: ['', Validators.required],
      nombre_producto: ['', Validators.required],
      precio: ['', Validators.required],
      stock: ['', Validators.required],
      descripcion: [''],
      estado: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.productoId = +params['id'];
        this.productoService.getProducto().subscribe((productos) => {
          const producto = productos.find(p => p.id_Producto === this.productoId);
          if (producto) {
            this.productoForm.patchValue(producto);
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.productoForm.valid && this.productoId !== null) {
      this.productoService.updateProducto(this.productoId, this.productoForm.value).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          this.router.navigate(['/productos']);
        },
        (error) => {
          console.error('Error al actualizar el producto:', error);
        }
      );
    }
  }  

  onCancel(): void {
    this.router.navigate(['/productos']);
  }
}
