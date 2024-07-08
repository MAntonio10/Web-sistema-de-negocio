import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta } from '../models/venta.model';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private apiUrl = 'https://localhost:7219/api/Ventas/';

  constructor(private http: HttpClient) { }

  getVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(`${this.apiUrl}mostrar`);
  }

  deleteVenta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}borrar${id}`);
  }

  postVenta(venta: Venta): Observable<Venta> {
    return this.http.post<Venta>(`${this.apiUrl}agregar`, venta);
  }

  updateVenta(id: number, venta: Venta): Observable<Venta> {
    return this.http.put<Venta>(`${this.apiUrl}${id}`, venta);
  }
  getClienteIDs(): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiUrl}Clientes`);
  }

  getEmpleadoIDs(): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiUrl}Empleado`);
  }
}
