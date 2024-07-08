import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoCliente } from '../models/tipocliente.model';

@Injectable({
  providedIn: 'root'
})
export class TipoClienteService {
  private apiUrl = 'https://localhost:7219/api/TipoCliente/';

  constructor(private http: HttpClient) { }

  getTiposCliente(): Observable<TipoCliente[]> {
    return this.http.get<TipoCliente[]>(`${this.apiUrl}mostrar`);
  }

  deleteTipoCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}borrar${id}`);
  }

  postTipoCliente(tipoCliente: TipoCliente): Observable<TipoCliente> {
    return this.http.post<TipoCliente>(`${this.apiUrl}agregar`, tipoCliente);
  }

  updateTipoCliente(id: number, tipoCliente: TipoCliente): Observable<TipoCliente> {
    return this.http.put<TipoCliente>(`${this.apiUrl}${id}`, tipoCliente);
  }
}
