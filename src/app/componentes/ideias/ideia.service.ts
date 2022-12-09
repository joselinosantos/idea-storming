import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ideia } from './ideia';

@Injectable({
  providedIn: 'root'
})
export class IdeiaService {
  private readonly API = 'http://localhost:3000/ideias'

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Ideia[]>(this.API)
  }
}
