import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TipoClienteService } from '../services/tipocliente.service';
import { MatSort } from '@angular/material/sort';
import { TipoCliente } from '../models/tipocliente.model';

@Component({
  selector: 'app-tipocliente',
  templateUrl: './tipocliente.component.html',
  styleUrls: ['./tipocliente.component.css']
})
export class TipoclienteComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id_Tipocliente', 'tipo_Cliente', 'descuento', 'acciones'];
  dataSource = new MatTableDataSource<TipoCliente>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private tipoClienteService: TipoClienteService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = "Elementos por página";
  }

  ngOnInit() {
    this.obtenerTipoClientes();
  }

  obtenerTipoClientes() {
    this.tipoClienteService.getTiposCliente().subscribe(data => {
      console.log('Datos de tipos de cliente:', data);
      this.dataSource.data = data;
    }, error => {
      console.error('Error al obtener los tipos de cliente', error);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarTipoCliente(element: TipoCliente) {
    const confirmDelete = confirm(`¿Está seguro de que desea eliminar el tipo de cliente ${element.tipo_Cliente}?`);
    if (confirmDelete) {
      this.tipoClienteService.deleteTipoCliente(element.id_Tipocliente).subscribe(() => {
        console.log('Tipo de cliente eliminado correctamente');
        this.dataSource.data = this.dataSource.data.filter(tc => tc.id_Tipocliente !== element.id_Tipocliente);
      }, error => {
        console.error('Error al eliminar el tipo de cliente', error);
      });
    }
  }
}
