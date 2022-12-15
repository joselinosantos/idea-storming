import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ideia } from './ideia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdeiaService {
  private readonly API = 'http://localhost:3000/ideias'

  constructor(private http: HttpClient) { }

  listar(): Observable<Ideia[]> {
    return this.http.get<Ideia[]>(this.API)
  }

  criar(ideia: Ideia): Observable<Ideia> {
    return this.http.post<Ideia>(this.API, ideia)
  }

  excluir(id: number): Observable<Ideia> {
    const url = `${this.API}/${id}`
    return this.http.delete<Ideia>(url)
  }

  editar(ideia: Ideia): Observable<Ideia> {
    console.log(ideia);
    
    const url = `${this.API}/${ideia.id}`
    return this.http.put<Ideia>(url, ideia )
  }

  buscarPorId(id: number): Observable<Ideia> {
    const url = `${this.API}/${id}`
    return this.http.get<Ideia>(url)
  }
}
