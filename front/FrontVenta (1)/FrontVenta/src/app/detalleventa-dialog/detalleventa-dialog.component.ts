import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DetalleVentaService } from '../services/detalleventa.service';
import { DetalleVenta } from '../models/detalleventa.model';

@Component({
  selector: 'app-detalleventa-dialog',
  templateUrl: './detalleventa-dialog.component.html',
  styleUrls: ['./detalleventa-dialog.component.css']
})
export class DetalleventaDialogComponent {
  detalleVentaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private detalleVentaService: DetalleVentaService,
    private router: Router
  ) {
    this.detalleVentaForm = this.fb.group({
      venta_Id_venta: ['', Validators.required],
      producto_Id_Producto: ['', Validators.required],
      cantidad: ['', Validators.required],
      precio_venta: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.detalleVentaForm.valid) {
      const nuevoDetalleVenta: DetalleVenta = this.detalleVentaForm.value;
      this.detalleVentaService.postDetalleVenta(nuevoDetalleVenta).subscribe(detalleVenta => {
        console.log('Detalle de Venta agregado:', detalleVenta);
        this.router.navigate(['/detalleventa']);
      }, error => {
        console.error('Error al agregar el detalle de venta', error);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/detalleventa']);
  }
}
