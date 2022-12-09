import { IdeiaService } from './../ideia.service';
import { Ideia } from './../ideia';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-ideias',
  templateUrl: './listar-ideias.component.html',
  styleUrls: ['./listar-ideias.component.css']
})
export class ListarIdeiasComponent implements OnInit {
  listaIdeias: Ideia[] = [];

  constructor(private service: IdeiaService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaIdeias) => {
      this.listaIdeias = listaIdeias
    })
  }
}
