import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.css']
})
export class EditEmpleadoComponent implements OnInit {
  empleadoForm: FormGroup;
  empleadoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.empleadoForm = this.fb.group({
      id_Persona: [{ value: '', disabled: true }],
      codigo_Empleado: ['', Validators.required],
      usuario: ['', Validators.required],
      tipo_Empleado_id_tipo_empleado: ['', Validators.required],
      clave: ['', Validators.required],
      estado: ['', Validators.required],
      almacen_Id_Almacen: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.empleadoId = +params['id'];
        this.empleadoService.getEmpleados().subscribe((empleados) => {
          const empleado = empleados.find(e => e.id_Persona === this.empleadoId);
          if (empleado) {
            this.empleadoForm.patchValue(empleado);
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.empleadoForm.valid && this.empleadoId !== null) {
      this.empleadoService.updateEmpleado(this.empleadoId, this.empleadoForm.value).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          this.router.navigate(['/empleado']);
        },
        (error) => {
          console.error('Error al actualizar el empleado:', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/empleado']);
  }
}
