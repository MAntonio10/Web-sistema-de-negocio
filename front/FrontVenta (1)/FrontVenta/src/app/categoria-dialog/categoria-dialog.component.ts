import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../models/categoria.model';

@Component({
  selector: 'app-categoria-dialog',
  templateUrl: './categoria-dialog.component.html',
  styleUrls: ['./categoria-dialog.component.css']
})
export class CategoriaDialogComponent {
  categoriaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private router: Router
  ) {
    this.categoriaForm = this.fb.group({
      nombre_categoria: ['', Validators.required],
      descripcion: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.categoriaForm.valid) {
      const nuevaCategoria: Categoria = this.categoriaForm.value;
      this.categoriaService.postCategoria(nuevaCategoria).subscribe(categoria => {
        console.log('Categoría agregada:', categoria);
        this.router.navigate(['/categorias']);
      }, error => {
        console.error('Error al agregar la categoría', error);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/categorias']);
  }
}
