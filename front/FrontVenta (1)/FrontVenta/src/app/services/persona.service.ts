import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personas } from '../models/persona.model';  // Asegúrate de tener un modelo de datos

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiUrl = 'https://localhost:7219/api/Persona/'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Personas[]> {
    return this.http.get<Personas[]>(`${this.apiUrl}mostrar`);
  }

  deletePersonas(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}borrar${id}`);
  }

  postPersonas(persona: Personas): Observable<Personas> {
    return this.http.post<Personas>(`${this.apiUrl}agregar`, persona);
  }

  updatePersonas(id: number, persona: Personas): Observable<Personas> {
    return this.http.put<Personas>(`${this.apiUrl}${id}`, persona);
}

}
