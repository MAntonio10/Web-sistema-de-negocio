import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmpleadoService } from '../services/empleado.service';
import { MatSort } from '@angular/material/sort';
import { Empleado } from '../models/empleado.model';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id_Persona', 'codigo_Empleado', 'usuario', 'tipo_Empleado_id_tipo_empleado', 'clave', 'estado', 'almacen_Id_Almacen', 'acciones'];
  dataSource = new MatTableDataSource<Empleado>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private empleadoService: EmpleadoService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = "Elementos por página";
  }

  ngOnInit() {
    this.obtenerEmpleados();
  }

  obtenerEmpleados() {
    this.empleadoService.getEmpleados().subscribe(data => {
      console.log('Datos de empleados:', data);
      this.dataSource.data = data;
    }, error => {
      console.error('Error al obtener los empleados', error);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarEmpleado(element: Empleado) {
    const confirmDelete = confirm(`¿Está seguro de que desea eliminar el empleado con código ${element.codigo_Empleado}?`);
    if (confirmDelete) {
      this.empleadoService.deleteEmpleado(element.id_Persona).subscribe(() => {
        console.log('Empleado eliminado correctamente');
        this.dataSource.data = this.dataSource.data.filter(empleado => empleado.id_Persona !== element.id_Persona);
      }, error => {
        console.error('Error al eliminar el empleado', error);
      });
    }
  }
}
