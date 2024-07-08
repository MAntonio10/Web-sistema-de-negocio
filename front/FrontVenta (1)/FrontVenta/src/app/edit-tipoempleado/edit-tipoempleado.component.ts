import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoEmpleadoService } from '../services/tipoempleado.service';

@Component({
  selector: 'app-edit-tipoempleado',
  templateUrl: './edit-tipoempleado.component.html',
  styleUrls: ['./edit-tipoempleado.component.css']
})
export class EditTipoempleadoComponent implements OnInit {
  tipoEmpleadoForm: FormGroup;
  tipoEmpleadoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private tipoEmpleadoService: TipoEmpleadoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.tipoEmpleadoForm = this.fb.group({
      id_tipo_empleado: [{ value: '', disabled: false }],
      tipo_empleado: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.tipoEmpleadoId = +params['id'];
        this.tipoEmpleadoService.getTiposEmpleado().subscribe((tipoEmpleados) => {
          const tipoEmpleado = tipoEmpleados.find(t => t.id_tipo_empleado === this.tipoEmpleadoId);
          if (tipoEmpleado) {
            this.tipoEmpleadoForm.patchValue(tipoEmpleado);
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.tipoEmpleadoForm.valid && this.tipoEmpleadoId !== null) {
      this.tipoEmpleadoService.updateTipoEmpleado(this.tipoEmpleadoId, this.tipoEmpleadoForm.value).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          this.router.navigate(['/tipoempleado']);
        },
        (error) => {
          console.error('Error al actualizar el tipo de empleado:', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/tipoempleado']);
  }
}
