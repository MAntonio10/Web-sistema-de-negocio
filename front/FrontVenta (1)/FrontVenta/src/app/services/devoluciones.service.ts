import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Devolucion } from '../models/devoluciones.model';  // Asegúrate de tener un modelo de datos

@Injectable({
  providedIn: 'root'
})
export class DevolucionesService {
  private apiUrl = 'https://localhost:7219/api/Devolucion/'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getDevolucion(): Observable<Devolucion[]> {
    return this.http.get<Devolucion[]>(`${this.apiUrl}mostrar`);
  }

  deleteDevolucion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}borrar${id}`);
  }

  postDevolucion(devolucion: Devolucion): Observable<Devolucion> {
    return this.http.post<Devolucion>(`${this.apiUrl}agregar`, devolucion);
  }

  updateDevolucion(id: number, devolucion: Devolucion): Observable<Devolucion> {
    return this.http.put<Devolucion>(`${this.apiUrl}${id}`, devolucion);
}

}
