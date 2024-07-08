import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoClienteService } from '../services/tipocliente.service';

@Component({
  selector: 'app-edit-tipocliente',
  templateUrl: './edit-tipocliente.component.html',
  styleUrls: ['./edit-tipocliente.component.css']
})
export class EditTipoclienteComponent implements OnInit {
  tipoClienteForm: FormGroup;
  tipoClienteId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private tipoClienteService: TipoClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.tipoClienteForm = this.fb.group({
      id_Tipocliente: [{ value: '', disabled: true }],
      tipo_Cliente: ['', Validators.required],
      descuento: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.tipoClienteId = +params['id'];
        this.tipoClienteService.getTiposCliente().subscribe((tipoClientes) => {
          const tipoCliente = tipoClientes.find(t => t.id_Tipocliente === this.tipoClienteId);
          if (tipoCliente) {
            this.tipoClienteForm.patchValue(tipoCliente);
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.tipoClienteForm.valid && this.tipoClienteId !== null) {
      this.tipoClienteService.updateTipoCliente(this.tipoClienteId, this.tipoClienteForm.value).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          this.router.navigate(['/tipocliente']);
        },
        (error) => {
          console.error('Error al actualizar el tipo de cliente:', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/tipocliente']);
  }
}
