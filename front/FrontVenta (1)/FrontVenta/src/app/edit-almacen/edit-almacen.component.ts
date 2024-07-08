import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlmacenService } from '../services/almacen.service';

@Component({
  selector: 'app-edit-almacen',
  templateUrl: './edit-almacen.component.html',
  styleUrls: ['./edit-almacen.component.css']
})
export class EditAlmacenComponent implements OnInit {
  almacenForm: FormGroup;
  almacenId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private almacenService: AlmacenService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.almacenForm = this.fb.group({
      id_Almacen: [{ value: '', disabled: false }],
      nombre_almacen: ['', Validators.required],
      direccion_almacen: ['', Validators.required],
      telefono_almacen: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.almacenId = +params['id'];
        this.almacenService.getProducto().subscribe((almacenes) => {
          const almacen = almacenes.find(p => p.id_Almacen === this.almacenId);
          if (almacen) {
            this.almacenForm.patchValue(almacen);
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.almacenForm.valid && this.almacenId !== null) {
      this.almacenService.updateProducto(this.almacenId, this.almacenForm.value).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          this.router.navigate(['/almacen']);
        },
        (error) => {
          console.error('Error al actualizar el almacén:', error);
        }
      );
    }
  }  

  onCancel(): void {
    this.router.navigate(['/almacen']);
  }
}
