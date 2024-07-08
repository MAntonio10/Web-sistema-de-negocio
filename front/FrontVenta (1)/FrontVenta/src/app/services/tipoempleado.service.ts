import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoEmpleado } from '../models/tipoempleado.model';

@Injectable({
  providedIn: 'root'
})
export class TipoEmpleadoService {
  private apiUrl = 'https://localhost:7219/api/TipoEmpleado/';

  constructor(private http: HttpClient) { }

  getTiposEmpleado(): Observable<TipoEmpleado[]> {
    return this.http.get<TipoEmpleado[]>(`${this.apiUrl}mostrar`);
  }

  deleteTipoEmpleado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}borrar${id}`);
  }

  postTipoEmpleado(tipoEmpleado: TipoEmpleado): Observable<TipoEmpleado> {
    return this.http.post<TipoEmpleado>(`${this.apiUrl}agregar`, tipoEmpleado);
  }

  updateTipoEmpleado(id: number, tipoEmpleado: TipoEmpleado): Observable<TipoEmpleado> {
    return this.http.put<TipoEmpleado>(`${this.apiUrl}${id}`, tipoEmpleado);
  }
}
