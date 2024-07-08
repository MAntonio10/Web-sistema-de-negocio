import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedores } from '../models/proveedores.model';

@Injectable({
    providedIn: 'root'
  })
  export class ProveedoresService {
    private apiUrl = 'https://localhost:7219/api/Proveedor/'; // Reemplaza con la URL de tu API
  
    constructor(private http: HttpClient) { }

    getProveedores(): Observable<Proveedores[]> {
        return this.http.get<Proveedores[]>(`${this.apiUrl}mostrar`);
      }
    
      deleteProveedores(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}borrar${id}`);
      }
    
      postProveedores(proveedores: Proveedores): Observable<Proveedores> {
        return this.http.post<Proveedores>(`${this.apiUrl}agregar`, proveedores);
      }
    
      updateProveedores(id: number, proveedores: Proveedores): Observable<Proveedores> {
        return this.http.put<Proveedores>(`${this.apiUrl}${id}`, proveedores);
    }
  }