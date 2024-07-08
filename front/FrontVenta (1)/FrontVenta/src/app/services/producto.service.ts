import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
    providedIn: 'root'
  })
  export class ProductoService {
    private apiUrl = 'https://localhost:7219/api/Producto/'; // Reemplaza con la URL de tu API
  
    constructor(private http: HttpClient) { }

    getProducto(): Observable<Producto[]> {
        return this.http.get<Producto[]>(`${this.apiUrl}mostrar`);
      }
    
      deleteProducto(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}borrar${id}`);
      }
    
      postProducto(producto: Producto): Observable<Producto> {
        return this.http.post<Producto>(`${this.apiUrl}agregar`, producto);
      }
    
      updateProducto(id: number, producto: Producto): Observable<Producto> {
        return this.http.put<Producto>(`${this.apiUrl}${id}`, producto);
    }
  }