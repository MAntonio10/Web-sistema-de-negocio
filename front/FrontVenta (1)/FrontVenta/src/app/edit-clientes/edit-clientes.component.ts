import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-clientes.component.html',
  styleUrls: ['./edit-clientes.component.css']
})
export class EditClientesComponent implements OnInit {
  clienteForm: FormGroup;
  clienteId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.clienteForm = this.fb.group({
      id_Persona: [{ value: '', disabled: false }],
      codigo_Cliente: ['', Validators.required],
      tipoCliente_Id_TipoCliente: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.clienteId = +params['id'];
        this.clienteService.getClientes().subscribe((clientes) => {
          const cliente = clientes.find(c => c.id_Persona === this.clienteId);
          if (cliente) {
            this.clienteForm.patchValue(cliente);
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.clienteForm.valid && this.clienteId !== null) {
      const updatedCliente: Cliente = this.clienteForm.value;
      this.clienteService.updateCliente(this.clienteId, updatedCliente).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          this.router.navigate(['/cliente']);
        },
        (error) => {
          console.error('Error al actualizar el cliente:', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/cliente']);
  }
}
