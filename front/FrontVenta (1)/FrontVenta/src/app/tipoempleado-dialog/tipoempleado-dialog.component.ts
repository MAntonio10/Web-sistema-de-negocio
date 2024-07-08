import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoEmpleadoService } from '../services/tipoempleado.service';
import { TipoEmpleado } from '../models/tipoempleado.model';

@Component({
  selector: 'app-tipoempleado-dialog',
  templateUrl: './tipoempleado-dialog.component.html',
  styleUrls: ['./tipoempleado-dialog.component.css']
})
export class TipoempleadoDialogComponent {
  tipoEmpleadoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tipoEmpleadoService: TipoEmpleadoService,
    private router: Router
  ) {
    this.tipoEmpleadoForm = this.fb.group({
      tipo_empleado: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.tipoEmpleadoForm.valid) {
      const nuevoTipoEmpleado: TipoEmpleado = this.tipoEmpleadoForm.value;
      this.tipoEmpleadoService.postTipoEmpleado(nuevoTipoEmpleado).subscribe(tipoEmpleado => {
        console.log('Tipo de Empleado agregado:', tipoEmpleado);
        this.router.navigate(['/tipoempleado']);
      }, error => {
        console.error('Error al agregar el tipo de empleado', error);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/tipoempleado']);
  }
}
