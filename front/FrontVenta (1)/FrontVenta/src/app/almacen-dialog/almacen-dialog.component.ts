import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlmacenService } from '../services/almacen.service';
import { Almacen } from '../models/almacen.model';

@Component({
  selector: 'app-almacen-dialog',
  templateUrl: './almacen-dialog.component.html',
  styleUrls: ['./almacen-dialog.component.css']
})
export class AlmacenDialogComponent {
  almacenForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private almacenService: AlmacenService,
    private router: Router
  ) {
    this.almacenForm = this.fb.group({
      nombre_almacen: ['', Validators.required],
      direccion_almacen: ['', Validators.required],
      telefono_almacen: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.almacenForm.valid) {
      const nuevoAlmacen: Almacen = this.almacenForm.value;
      this.almacenService.postProducto(nuevoAlmacen).subscribe(almacen => {
        console.log('Almacén agregado:', almacen);
        this.router.navigate(['/almacen']);
      }, error => {
        console.error('Error al agregar el almacén', error);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/almacen']);
  }
}
