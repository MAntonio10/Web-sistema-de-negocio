import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedoresService } from '../services/proveedores.service';
import { Proveedores } from '../models/proveedores.model';

@Component({
  selector: 'app-edit-proveedores',
  templateUrl: './edit-proveedores.component.html',
  styleUrls: ['./edit-proveedores.component.css']
})
export class EditProveedoresComponent implements OnInit {
  proveedorForm: FormGroup;
  proveedorId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private proveedoresService: ProveedoresService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.proveedorForm = this.fb.group({
      id_proveedor: [{ value: '', disabled: false }],
      nombre_proveedor: ['', Validators.required],
      telefono_proveedor: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.proveedorId = +params['id'];
        this.proveedoresService.getProveedores().subscribe((proveedores) => {
          const proveedor = proveedores.find(p => p.id_proveedor === this.proveedorId);
          if (proveedor) {
            this.proveedorForm.patchValue(proveedor);
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.proveedorForm.valid && this.proveedorId !== null) {
      this.proveedoresService.updateProveedores(this.proveedorId, this.proveedorForm.value).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          this.router.navigate(['/proveedores']);
        },
        (error) => {
          console.error('Error al actualizar el proveedor:', error);
        }
      );
    }
  }  

  onCancel(): void {
    this.router.navigate(['/proveedores']);
  }
}
