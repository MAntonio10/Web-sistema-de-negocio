import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoClienteService } from '../services/tipocliente.service';
import { TipoCliente } from '../models/tipocliente.model';

@Component({
  selector: 'app-tipocliente-dialog',
  templateUrl: './tipocliente-dialog.component.html',
  styleUrls: ['./tipocliente-dialog.component.css']
})
export class TipoclienteDialogComponent {
  tipoClienteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tipoClienteService: TipoClienteService,
    private router: Router
  ) {
    this.tipoClienteForm = this.fb.group({
      tipo_Cliente: ['', Validators.required],
      descuento: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.tipoClienteForm.valid) {
      const nuevoTipoCliente: TipoCliente = this.tipoClienteForm.value;
      this.tipoClienteService.postTipoCliente(nuevoTipoCliente).subscribe(tipoCliente => {
        console.log('Tipo de Cliente agregado:', tipoCliente);
        this.router.navigate(['/tipocliente']);
      }, error => {
        console.error('Error al agregar el tipo de cliente', error);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/tipocliente']);
  }
}
