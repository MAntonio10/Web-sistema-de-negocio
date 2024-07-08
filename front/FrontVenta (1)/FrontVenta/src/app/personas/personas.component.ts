import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { PersonaService } from '../services/persona.service';
import { Personas } from '../models/persona.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id_Persona', 'nit', 'dpi', 'nombre', 'apellido', 'telefono', 'direccion', 'estado', 'acciones'];
  dataSource = new MatTableDataSource<Personas>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private personaService: PersonaService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = "Elementos por página";
  }

  ngOnInit() {
    this.obtenerPersonas();
  }

  obtenerPersonas() {
    this.personaService.getPersonas().subscribe(data => {
      console.log('Datos de personas:', data); // Verificar los datos
      this.dataSource.data = data;
    }, error => {
      console.error('Error al obtener las personas', error);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deletePersona(element: Personas) {
    const confirmDelete = confirm(`¿Está seguro de que desea eliminar a la persona ${element.nombre} ${element.apellido}?`);
    if (confirmDelete) {
      this.personaService.deletePersonas(element.id_Persona).subscribe(() => {
        console.log('Persona eliminada correctamente');
        this.dataSource.data = this.dataSource.data.filter(persona => persona.id_Persona !== element.id_Persona);
      }, error => {
        console.error('Error al eliminar la persona', error);
      });
    }
  }
}
