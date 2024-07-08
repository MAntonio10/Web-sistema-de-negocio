import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriaService } from '../services/categoria.service';
import { MatSort } from '@angular/material/sort';
import { Categoria } from '../models/categoria.model';  // Importa el modelo de datos

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id_Categoria', 'Nombre_categoria', 'Descripcion', 'Estado', 'acciones'];
  dataSource = new MatTableDataSource<Categoria>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private categoriaService: CategoriaService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = "Elementos por página";
  }

  ngOnInit() {
    this.obtenerCategorias();
  }

  obtenerCategorias() {
    this.categoriaService.getCategorias().subscribe(data => {
      console.log('Datos de categorías:', data); // Verificar los datos
      this.dataSource.data = data;
    }, error => {
      console.error('Error al obtener las categorías', error);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteCategoria(element: Categoria) {
    const confirmDelete = confirm(`¿Está seguro de que desea eliminar la categoría ${element.nombre_categoria}?`);
    if (confirmDelete) {
      this.categoriaService.deleteCategoria(element.id_Categoria).subscribe(() => {
        console.log('Categoría eliminada correctamente');
        this.dataSource.data = this.dataSource.data.filter(categoria => categoria.id_Categoria !== element.id_Categoria);
      }, error => {
        console.error('Error al eliminar la categoría', error);
      });
    }
  }
}
