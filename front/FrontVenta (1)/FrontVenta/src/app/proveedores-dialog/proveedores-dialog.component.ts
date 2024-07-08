import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProveedoresService } from '../services/proveedores.service';
import { Proveedores } from '../models/proveedores.model';

@Component({
  selector: 'app-proveedores-dialog',
  templateUrl: './proveedores-dialog.component.html',
  styleUrls: ['./proveedores-dialog.component.css']
})
export class ProveedoresDialogComponent {
  proveedorForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private proveedoresService: ProveedoresService,
    private router: Router
  ) {
    this.proveedorForm = this.fb.group({
      nombre_proveedor: ['', Validators.required],
      telefono_proveedor: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.proveedorForm.valid) {
      const nuevoProveedor: Proveedores = this.proveedorForm.value;
      this.proveedoresService.postProveedores(nuevoProveedor).subscribe(proveedor => {
        console.log('Proveedor agregado:', proveedor);
        this.router.navigate(['/proveedores']);
      }, error => {
        console.error('Error al agregar el proveedor', error);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/proveedores']);
  }
}
