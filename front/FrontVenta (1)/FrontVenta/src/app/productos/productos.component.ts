import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoService } from '../services/producto.service';
import { MatSort } from '@angular/material/sort';
import { Producto } from '../models/producto.model';  // Importa el modelo de datos

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id_Producto', 'categoria_Id_Categoria', 'proveedor_Id_Proveedor', 'almace_Id_Almacen', 'nombre_producto', 'precio', 'stock', 'descripcion', 'estado', 'acciones'];
  dataSource = new MatTableDataSource<Producto>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private productoService: ProductoService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = "Elementos por página";
  }

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productoService.getProducto().subscribe(data => {
      console.log('Datos de productos:', data); // Verificar los datos
      this.dataSource.data = data;
    }, error => {
      console.error('Error al obtener los productos', error);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteProducto(element: Producto) {
    const confirmDelete = confirm(`¿Está seguro de que desea eliminar el producto ${element.nombre_producto}?`);
    if (confirmDelete) {
      this.productoService.deleteProducto(element.id_Producto).subscribe(() => {
        console.log('Producto eliminado correctamente');
        this.dataSource.data = this.dataSource.data.filter(producto => producto.id_Producto !== element.id_Producto);
      }, error => {
        console.error('Error al eliminar el producto', error);
      });
    }
  }
}
