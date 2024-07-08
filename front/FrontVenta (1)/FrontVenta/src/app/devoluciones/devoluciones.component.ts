import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DevolucionesService } from '../services/devoluciones.service';
import { MatSort } from '@angular/material/sort';
import { Devolucion } from '../models/devoluciones.model';

@Component({
  selector: 'app-devoluciones',
  templateUrl: './devoluciones.component.html',
  styleUrls: ['./devoluciones.component.css']
})
export class DevolucionesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id_Devolucion', 'detalle_venta_id_detalle_venta', 'detalle_venta_id_producto', 'motivo', 'fecha_devolucion', 'cantidad', 'acciones'];
  dataSource = new MatTableDataSource<Devolucion>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private devolucionesService: DevolucionesService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = "Elementos por página";
  }

  ngOnInit() {
    this.obtenerDevoluciones();
  }

  obtenerDevoluciones() {
    this.devolucionesService.getDevolucion().subscribe(data => {
      this.dataSource.data = data.map(d => ({ ...d, fecha_devolucion: new Date(d.fecha_devolucion) }));
    }, error => {
      console.error('Error al obtener las devoluciones', error);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteDevolucion(element: Devolucion) {
    const confirmDelete = confirm(`¿Está seguro de que desea eliminar la devolución con ID ${element.id_Devolucion}?`);
    if (confirmDelete) {
      this.devolucionesService.deleteDevolucion(element.id_Devolucion).subscribe(() => {
        this.dataSource.data = this.dataSource.data.filter(devolucion => devolucion.id_Devolucion !== element.id_Devolucion);
      }, error => {
        console.error('Error al eliminar la devolución', error);
      });
    }
  }
}
