import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from '../services/persona.service';
import { Personas } from '../models/persona.model';

@Component({
  selector: 'app-edit-personas',
  templateUrl: './edit-personas.component.html',
  styleUrls: ['./edit-personas.component.css']
})
export class EditPersonasComponent implements OnInit {
  personaForm: FormGroup;
  personaId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private personaService: PersonaService,
    private router: Router,
    private route: ActivatedRoute
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

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.personaId = +params['id'];
        this.personaService.getPersonas().subscribe((personas) => {
          const persona = personas.find(p => p.id_Persona === this.personaId);
          if (persona) {
            this.personaForm.patchValue(persona);
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.personaForm.valid && this.personaId !== null) {
      const updatedPersona: Personas = {
        id_Persona: this.personaId,
        ...this.personaForm.value
      };

      this.personaService.updatePersonas(this.personaId, updatedPersona).subscribe(
        (response) => {
          console.log('Persona actualizada correctamente:', response);
          this.router.navigate(['/personas']);
        },
        (error) => {
          console.error('Error al actualizar la persona:', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/personas']);
  }
}
