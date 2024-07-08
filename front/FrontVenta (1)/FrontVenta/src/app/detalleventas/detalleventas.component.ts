import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DetalleVenta } from '../models/detalleventa.model';
import { DetalleVentaService } from '../services/detalleventa.service';

@Component({
  selector: 'app-detalleventa',
  templateUrl: './detalleventas.component.html',
  styleUrls: ['./detalleventas.component.css']
})
export class DetalleventaComponent implements OnInit {
  displayedColumns: string[] = ['id_Detalle_Venta', 'venta_Id_venta', 'producto_Id_Producto', 'cantidad', 'precio_venta', 'acciones'];
  dataSource = new MatTableDataSource<DetalleVenta>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private detalleVentaService: DetalleVentaService) { }

  ngOnInit(): void {
    this.obtenerDetalleVentas();
  }

  obtenerDetalleVentas(): void {
    this.detalleVentaService.getDetalleVenta().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteDetalleVenta(element: DetalleVenta): void {
    this.detalleVentaService.deleteDetalleVenta(element.id_Detalle_Venta).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(dv => dv.id_Detalle_Venta !== element.id_Detalle_Venta);
    });
  }
}
