import { IdeiaService } from './../ideia.service';
import { Ideia } from './../ideia';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-ideias',
  templateUrl: './listar-ideias.component.html',
  styleUrls: ['./listar-ideias.component.css']
})
export class ListarIdeiasComponent implements OnInit {
  listaIdeias: Ideia[] = []
  paginaAtual: number = 1
  haMaisIdeias: boolean = true
  filtro: string = ''

  constructor(private service: IdeiaService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro).subscribe((listaIdeias) => {
      this.listaIdeias = listaIdeias
    })
  }

  pesquisarIdeias() {
    this.service.listar(this.paginaAtual, this.filtro).subscribe(listaIdeias => {
      this.listaIdeias = listaIdeias
    })
  }

  carregarMaisIdeias() {
    this.service.listar(++this.paginaAtual, this.filtro)
    .subscribe(listaIdeias => {
      this.listaIdeias.push(...listaIdeias)
      if (!listaIdeias.length) {
        this.haMaisIdeias = false
      }
    })
  }
}
