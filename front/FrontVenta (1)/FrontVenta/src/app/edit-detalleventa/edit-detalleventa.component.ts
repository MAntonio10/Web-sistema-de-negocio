import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleVentaService } from '../services/detalleventa.service';

@Component({
  selector: 'app-edit-detalleventa',
  templateUrl: './edit-detalleventa.component.html',
  styleUrls: ['./edit-detalleventa.component.css']
})
export class EditDetalleventaComponent implements OnInit {
  detalleVentaForm: FormGroup;
  detalleVentaId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private detalleVentaService: DetalleVentaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.detalleVentaForm = this.fb.group({
      id_Detalle_Venta: [{ value: '', disabled: false }],
      venta_Id_venta: ['', Validators.required],
      producto_Id_Producto: ['', Validators.required],
      cantidad: ['', Validators.required],
      precio_venta: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.detalleVentaId = +params['id'];
        this.detalleVentaService.getDetalleVenta().subscribe((detalleVentas) => {
          const detalleVenta = detalleVentas.find(dv => dv.id_Detalle_Venta === this.detalleVentaId);
          if (detalleVenta) {
            this.detalleVentaForm.patchValue(detalleVenta);
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.detalleVentaForm.valid && this.detalleVentaId !== null) {
      this.detalleVentaService.updateDetalleVenta(this.detalleVentaId, this.detalleVentaForm.value).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          this.router.navigate(['/detalleventa']);
        },
        (error) => {
          console.error('Error al actualizar el detalle de venta:', error);
        }
      );
    }
  }  

  onCancel(): void {
    this.router.navigate(['/detalleventa']);
  }
}
