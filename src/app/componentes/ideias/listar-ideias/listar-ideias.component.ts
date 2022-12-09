import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-ideias',
  templateUrl: './listar-ideias.component.html',
  styleUrls: ['./listar-ideias.component.css']
})
export class ListarIdeiasComponent implements OnInit {
  listaIdeias = [
    {
      conteudo: 'Uma mente que se abre a uma nova ideia, nunca mais voltará ao seu tamano original',
      autor: 'Dev',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Uma mente que se abre a uma nova ideia, nunca mais voltará ao seu tamano original',
      autor: 'Dev',
      modelo: 'modelo2'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
