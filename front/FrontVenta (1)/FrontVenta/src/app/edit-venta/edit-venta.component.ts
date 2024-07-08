import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VentaService } from '../services/venta.service';

@Component({
  selector: 'app-edit-venta',
  templateUrl: './edit-venta.component.html',
  styleUrls: ['./edit-venta.component.css']
})
export class EditVentaComponent implements OnInit {
  ventaForm: FormGroup;
  ventaId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private ventaService: VentaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.ventaForm = this.fb.group({
      id_Venta: [{ value: '', disabled: false }],
      cliente_Codigo_Cliente: ['', Validators.required],
      empleado_Codigo_Empleado: ['', Validators.required],
      numero_venta: ['', Validators.required],
      fecha_venta: ['', Validators.required],
      monto: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.ventaId = +params['id'];
        this.ventaService.getVentas().subscribe((ventas) => {
          const venta = ventas.find(v => v.id_Venta === this.ventaId);
          if (venta) {
            this.ventaForm.patchValue(venta);
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.ventaForm.valid && this.ventaId !== null) {
      this.ventaService.updateVenta(this.ventaId, this.ventaForm.value).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          this.router.navigate(['/ventas']);
        },
        (error) => {
          console.error('Error al actualizar la venta:', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/ventas']);
  }
}
