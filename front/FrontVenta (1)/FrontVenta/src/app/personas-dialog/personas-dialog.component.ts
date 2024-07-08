import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaService } from '../services/persona.service';
import { Personas } from '../models/persona.model';

@Component({
  selector: 'app-personas-dialog',
  templateUrl: './personas-dialog.component.html',
  styleUrls: ['./personas-dialog.component.css']
})
export class PersonasDialogComponent {
  personaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private personaService: PersonaService,
    private router: Router
  ) {
    this.personaForm = this.fb.group({
      nit: ['', Validators.required],
      dpi: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.personaForm.valid) {
      const newPersona: Personas = {
        id_Persona: 0,
        ...this.personaForm.value
      };

      this.personaService.postPersonas(newPersona).subscribe(() => {
        console.log('Persona agregada correctamente');
        this.router.navigate(['/personas']);
      }, error => {
        console.error('Error al agregar la persona', error);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/personas']);
  }
}
