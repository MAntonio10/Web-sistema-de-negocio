import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteService } from '../services/cliente.service';
import { MatSort } from '@angular/material/sort';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id_Persona', 'codigo_Cliente', 'tipoCliente_Id_TipoCliente', 'estado', 'acciones'];
  dataSource = new MatTableDataSource<Cliente>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private clienteService: ClienteService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = "Elementos por página";
  }

  ngOnInit() {
    this.obtenerClientes();
  }

  obtenerClientes() {
    this.clienteService.getClientes().subscribe(data => {
      console.log('Datos de clientes:', data);
      this.dataSource.data = data;
    }, error => {
      console.error('Error al obtener los clientes', error);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarCliente(element: Cliente) {
    const confirmDelete = confirm(`¿Está seguro de que desea eliminar el cliente con código ${element.codigo_Cliente}?`);
    if (confirmDelete) {
      this.clienteService.deleteCliente(element.id_Persona).subscribe(() => {
        console.log('Cliente eliminado correctamente');
        this.dataSource.data = this.dataSource.data.filter(cliente => cliente.id_Persona !== element.id_Persona);
      }, error => {
        console.error('Error al eliminar el cliente', error);
      });
    }
  }
}
