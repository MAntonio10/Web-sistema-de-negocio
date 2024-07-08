import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent implements OnInit {
  categoriaForm: FormGroup;
  categoriaId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.categoriaForm = this.fb.group({
      id_Categoria: [{ value: '', disabled: false }], // Deshabilitado para no ser editado
      nombre_categoria: ['', Validators.required],
      descripcion: [''],
      estado: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.categoriaId = +params['id'];
        this.categoriaService.getCategorias().subscribe((categorias) => {
          const categoria = categorias.find(c => c.id_Categoria === this.categoriaId);
          if (categoria) {
            this.categoriaForm.patchValue(categoria);
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.categoriaForm.valid && this.categoriaId !== null) {
      this.categoriaService.updateCategoria(this.categoriaId, this.categoriaForm.value).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          this.router.navigate(['/categorias']);
        },
        (error) => {
          console.error('Error al actualizar la categoría:', error);
        }
      );
    }
  }  

  onCancel(): void {
    this.router.navigate(['/categorias']);
  }
}
