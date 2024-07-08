import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TipoEmpleadoService } from '../services/tipoempleado.service';
import { MatSort } from '@angular/material/sort';
import { TipoEmpleado } from '../models/tipoempleado.model';

@Component({
  selector: 'app-tipoempleado',
  templateUrl: './tipoempleado.component.html',
  styleUrls: ['./tipoempleado.component.css']
})
export class TipoempleadoComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id_tipo_empleado', 'tipo_empleado', 'estado', 'acciones'];
  dataSource = new MatTableDataSource<TipoEmpleado>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private tipoEmpleadoService: TipoEmpleadoService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = "Elementos por página";
  }

  ngOnInit() {
    this.obtenerTipoEmpleados();
  }

  obtenerTipoEmpleados() {
    this.tipoEmpleadoService.getTiposEmpleado().subscribe(data => {
      console.log('Datos de tipos de empleado:', data);
      this.dataSource.data = data;
    }, error => {
      console.error('Error al obtener los tipos de empleado', error);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarTipoEmpleado(element: TipoEmpleado) {
    const confirmDelete = confirm(`¿Está seguro de que desea eliminar el tipo de empleado ${element.tipo_empleado}?`);
    if (confirmDelete) {
      this.tipoEmpleadoService.deleteTipoEmpleado(element.id_tipo_empleado).subscribe(() => {
        console.log('Tipo de empleado eliminado correctamente');
        this.dataSource.data = this.dataSource.data.filter(te => te.id_tipo_empleado !== element.id_tipo_empleado);
      }, error => {
        console.error('Error al eliminar el tipo de empleado', error);
      });
    }
  }
}
