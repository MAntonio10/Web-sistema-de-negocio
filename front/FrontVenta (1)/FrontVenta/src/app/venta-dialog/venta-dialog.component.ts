import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VentaService } from '../services/venta.service';
import { Venta } from '../models/venta.model';

@Component({
  selector: 'app-venta-dialog',
  templateUrl: './venta-dialog.component.html',
  styleUrls: ['./venta-dialog.component.css']
})
export class VentaDialogComponent {
  ventaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ventaService: VentaService,
    private router: Router
  ) {
    this.ventaForm = this.fb.group({
      cliente_Codigo_Cliente: ['', Validators.required],
      empleado_Codigo_Empleado: ['', Validators.required],
      numero_venta: ['', Validators.required],
      fecha_venta: ['', Validators.required],
      monto: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.ventaForm.valid) {
      const nuevaVenta: Venta = this.ventaForm.value;
      this.ventaService.postVenta(nuevaVenta).subscribe(venta => {
        console.log('Venta agregada:', venta);
        this.router.navigate(['/ventas']);
      }, error => {
        console.error('Error al agregar la venta', error);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/ventas']);
  }
}
