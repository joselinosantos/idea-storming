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
}
