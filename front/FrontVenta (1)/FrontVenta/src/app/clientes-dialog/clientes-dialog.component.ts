import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-clientes-dialog',
  templateUrl: './clientes-dialog.component.html',
  styleUrls: ['./clientes-dialog.component.css']
})
export class ClientesDialogComponent {
  clienteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router
  ) {
    this.clienteForm = this.fb.group({
      id_Persona: ['', Validators.required],
      codigo_Cliente: ['', Validators.required],
      tipoCliente_Id_TipoCliente: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.clienteForm.valid) {
      const nuevoCliente: Cliente = this.clienteForm.value;
      this.clienteService.postCliente(nuevoCliente).subscribe(cliente => {
        console.log('Cliente agregado:', cliente);
        this.router.navigate(['/cliente']);
      }, error => {
        console.error('Error al agregar el cliente', error);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/cliente']);
  }
}
