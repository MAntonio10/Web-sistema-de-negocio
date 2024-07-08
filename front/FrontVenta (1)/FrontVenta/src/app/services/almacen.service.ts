import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Almacen } from '../models/almacen.model';

@Injectable({
    providedIn: 'root'
  })
  export class AlmacenService {
    private apiUrl = 'https://localhost:7219/api/Almacen/'; // Reemplaza con la URL de tu API
  
    constructor(private http: HttpClient) { }

    getProducto(): Observable<Almacen[]> {
        return this.http.get<Almacen[]>(`${this.apiUrl}mostrar`);
      }
    
      deleteProducto(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}borrar${id}`);
      }
    
      postProducto(almacen: Almacen): Observable<Almacen> {
        return this.http.post<Almacen>(`${this.apiUrl}agregar`, almacen);
      }
    
      updateProducto(id: number, almacen: Almacen): Observable<Almacen> {
        return this.http.put<Almacen>(`${this.apiUrl}${id}`, almacen);
    }
  }