import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProveedoresService } from '../services/proveedores.service';
import { MatSort } from '@angular/material/sort';
import { Proveedores } from '../models/proveedores.model';  // Importa el modelo de datos

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id_proveedor', 'nombre_proveedor', 'telefono_proveedor', 'estado', 'acciones'];
  dataSource = new MatTableDataSource<Proveedores>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private proveedoresService: ProveedoresService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = "Elementos por página";
  }

  ngOnInit() {
    this.obtenerProveedores();
  }

  obtenerProveedores() {
    this.proveedoresService.getProveedores().subscribe(data => {
      console.log('Datos de proveedores:', data); // Verificar los datos
      this.dataSource.data = data;
    }, error => {
      console.error('Error al obtener los proveedores', error);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteProveedores(element: Proveedores) {
    const confirmDelete = confirm(`¿Está seguro de que desea eliminar el proveedor ${element.nombre_proveedor}?`);
    if (confirmDelete) {
      this.proveedoresService.deleteProveedores(element.id_proveedor).subscribe(() => {
        console.log('Proveedor eliminado correctamente');
        this.dataSource.data = this.dataSource.data.filter(proveedor => proveedor.id_proveedor !== element.id_proveedor);
      }, error => {
        console.error('Error al eliminar el proveedor', error);
      });
    }
  }
}
