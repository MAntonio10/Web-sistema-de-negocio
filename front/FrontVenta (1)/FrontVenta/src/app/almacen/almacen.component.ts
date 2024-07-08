import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AlmacenService } from '../services/almacen.service';
import { MatSort } from '@angular/material/sort';
import { Almacen } from '../models/almacen.model';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id_Almacen', 'nombre_almacen', 'direccion_almacen', 'telefono_almacen', 'estado', 'acciones'];
  dataSource = new MatTableDataSource<Almacen>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private almacenService: AlmacenService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = "Elementos por página";
  }

  ngOnInit() {
    this.obtenerAlmacenes();
  }

  obtenerAlmacenes() {
    this.almacenService.getProducto().subscribe(data => {
      console.log('Datos de almacenes:', data);
      this.dataSource.data = data;
    }, error => {
      console.error('Error al obtener los almacenes', error);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteAlmacen(element: Almacen) {
    const confirmDelete = confirm(`¿Está seguro de que desea eliminar el almacén ${element.nombre_almacen}?`);
    if (confirmDelete) {
      this.almacenService.deleteProducto(element.id_Almacen).subscribe(() => {
        console.log('Almacén eliminado correctamente');
        this.dataSource.data = this.dataSource.data.filter(almacen => almacen.id_Almacen !== element.id_Almacen);
      }, error => {
        console.error('Error al eliminar el almacén', error);
      });
    }
  }
}
