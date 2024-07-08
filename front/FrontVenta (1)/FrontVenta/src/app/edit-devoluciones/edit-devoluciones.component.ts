import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DevolucionesService } from '../services/devoluciones.service';
import { Devolucion } from '../models/devoluciones.model';

@Component({
  selector: 'app-edit-devoluciones',
  templateUrl: './edit-devoluciones.component.html',
  styleUrls: ['./edit-devoluciones.component.css']
})
export class EditDevolucionesComponent implements OnInit {
  devolucionForm: FormGroup;
  devolucionId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private devolucionesService: DevolucionesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.devolucionForm = this.fb.group({
      id_Devolucion: [{ value: '', disabled: false }],
      detalle_venta_id_detalle_venta: ['', Validators.required],
      detalle_venta_id_producto: ['', Validators.required],
      motivo: ['', Validators.required],
      fecha_devolucion: ['', Validators.required],
      cantidad: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.devolucionId = +params['id'];
        this.devolucionesService.getDevolucion().subscribe((devoluciones) => {
          const devolucion = devoluciones.find(d => d.id_Devolucion === this.devolucionId);
          if (devolucion) {
            this.devolucionForm.patchValue({ ...devolucion, fecha_devolucion: new Date(devolucion.fecha_devolucion).toISOString().substring(0, 10) });
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.devolucionForm.valid && this.devolucionId !== null) {
      const updatedDevolucion: Devolucion = this.devolucionForm.value;
      updatedDevolucion.fecha_devolucion = new Date(updatedDevolucion.fecha_devolucion);
      this.devolucionesService.updateDevolucion(this.devolucionId, updatedDevolucion).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          this.router.navigate(['/devoluciones']);
        },
        (error) => {
          console.error('Error al actualizar la devolución:', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/devoluciones']);
  }
}
