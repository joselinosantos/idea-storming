import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Ideia } from './ideia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdeiaService {
  private readonly API = 'http://localhost:3000/ideias'

  constructor(private http: HttpClient) { }

  listar(pagina: number, filtro: string): Observable<Ideia[]> {
    const itensPagina = 6
    let params = new HttpParams().set("_page", pagina).set("_limit", itensPagina)

    if (filtro.trim().length > 2) {
      params = params.set("q", filtro)
    }
    // return this.http.get<Ideia[]>(`${this.API}?_page=${pagina}&_limit=${itensPagina}`)
    return this.http.get<Ideia[]>(this.API, {params})
  }

  criar(ideia: Ideia): Observable<Ideia> {
    return this.http.post<Ideia>(this.API, ideia)
  }

  excluir(id: number): Observable<Ideia> {
    const url = `${this.API}/${id}`
    return this.http.delete<Ideia>(url)
  }

  editar(ideia: Ideia): Observable<Ideia> {    
    const url = `${this.API}/${ideia.id}`
    return this.http.put<Ideia>(url, ideia )
  }

  buscarPorId(id: number): Observable<Ideia> {
    const url = `${this.API}/${id}`
    return this.http.get<Ideia>(url)
  }
}
