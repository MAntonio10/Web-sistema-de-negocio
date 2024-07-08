import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadoService } from '../services/empleado.service';
import { Empleado } from '../models/empleado.model';

@Component({
  selector: 'app-empleado-dialog',
  templateUrl: './empleado-dialog.component.html',
  styleUrls: ['./empleado-dialog.component.css']
})
export class EmpleadoDialogComponent {
  empleadoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService,
    private router: Router
  ) {
    this.empleadoForm = this.fb.group({
      codigo_Empleado: ['', Validators.required],
      usuario: ['', Validators.required],
      tipo_Empleado_id_tipo_empleado: ['', Validators.required],
      clave: ['', Validators.required],
      estado: ['', Validators.required],
      almacen_Id_Almacen: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.empleadoForm.valid) {
      const nuevoEmpleado: Empleado = this.empleadoForm.value;
      this.empleadoService.postEmpleado(nuevoEmpleado).subscribe(empleado => {
        console.log('Empleado agregado:', empleado);
        this.router.navigate(['/empleado']);
      }, error => {
        console.error('Error al agregar el empleado', error);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/empleado']);
  }
}
