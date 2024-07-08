import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DevolucionesService } from '../services/devoluciones.service';
import { Devolucion } from '../models/devoluciones.model';

@Component({
  selector: 'app-devoluciones-dialog',
  templateUrl: './devoluciones-dialog.component.html',
  styleUrls: ['./devoluciones-dialog.component.css']
})
export class DevolucionesDialogComponent {
  devolucionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private devolucionesService: DevolucionesService,
    private router: Router
  ) {
    this.devolucionForm = this.fb.group({
      detalle_venta_id_detalle_venta: ['', Validators.required],
      detalle_venta_id_producto: ['', Validators.required],
      motivo: ['', Validators.required],
      fecha_devolucion: ['', Validators.required],
      cantidad: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.devolucionForm.valid) {
      const nuevaDevolucion: Devolucion = this.devolucionForm.value;
      nuevaDevolucion.fecha_devolucion = new Date(nuevaDevolucion.fecha_devolucion);
      this.devolucionesService.postDevolucion(nuevaDevolucion).subscribe(devolucion => {
        console.log('Devolución agregada:', devolucion);
        this.router.navigate(['/devoluciones']);
      }, error => {
        console.error('Error al agregar la devolución', error);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/devoluciones']);
  }
}
