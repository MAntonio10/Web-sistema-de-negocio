import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetalleVenta } from '../models/detalleventa.model';  

@Injectable({
  providedIn: 'root'
})
export class DetalleVentaService {
  private apiUrl = 'https://localhost:7219/api/DetalleVenta/'; 

  constructor(private http: HttpClient) { }

  getDetalleVenta(): Observable<DetalleVenta[]> {
    return this.http.get<DetalleVenta[]>(`${this.apiUrl}mostrar`);
  }

  deleteDetalleVenta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}borrar${id}`);
  }

  postDetalleVenta(detalleVenta: DetalleVenta): Observable<DetalleVenta> {
    return this.http.post<DetalleVenta>(`${this.apiUrl}agregar`, detalleVenta);
  }

  updateDetalleVenta(id: number, detalleVenta: DetalleVenta): Observable<DetalleVenta> {
    return this.http.put<DetalleVenta>(`${this.apiUrl}${id}`, detalleVenta);
  }
}
