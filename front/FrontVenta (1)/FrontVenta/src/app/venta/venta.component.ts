import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { VentaService } from '../services/venta.service';
import { MatSort } from '@angular/material/sort';
import { Venta } from '../models/venta.model';
import { PrintService } from '../services/print.service';  // Importa el servicio de impresión

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id_Venta', 'cliente_Codigo_Cliente', 'empleado_Codigo_Empleado', 'numero_venta', 'fecha_venta', 'monto', 'estado', 'acciones'];
  dataSource = new MatTableDataSource<Venta>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ventaService: VentaService, private printService: PrintService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = "Elementos por página";
  }

  ngOnInit() {
    this.obtenerVentas();
  }

  obtenerVentas() {
    this.ventaService.getVentas().subscribe(data => {
      console.log('Datos de ventas:', data);
      this.dataSource.data = data;
    }, error => {
      console.error('Error al obtener las ventas', error);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarVenta(element: Venta) {
    const confirmDelete = confirm(`¿Está seguro de que desea eliminar la venta con número ${element.numero_venta}?`);
    if (confirmDelete) {
      this.ventaService.deleteVenta(element.id_Venta).subscribe(() => {
        console.log('Venta eliminada correctamente');
        this.dataSource.data = this.dataSource.data.filter(venta => venta.id_Venta !== element.id_Venta);
      }, error => {
        console.error('Error al eliminar la venta', error);
      });
    }
  }

  // Método para imprimir la tabla
  imprimirTabla() {
    this.printService.imprimirElemento('tablaVentas');
  }
}
