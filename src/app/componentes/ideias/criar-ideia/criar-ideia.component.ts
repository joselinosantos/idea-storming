import { IdeiaService } from './../ideia.service';
import { Component, OnInit } from '@angular/core';
import { Ideia } from '../ideia';

@Component({
  selector: 'app-criar-ideia',
  templateUrl: './criar-ideia.component.html',
  styleUrls: ['./criar-ideia.component.css']
})
export class CriarIdeiaComponent implements OnInit {

  ideia: Ideia = {
    conteudo: '',
    autor: '',
    modelo: ''
  }

  constructor(private service: IdeiaService) { }

  ngOnInit(): void {
  }

  criarIdeia() {
    this.service.criar(this.ideia).subscribe()
  }

  cancelar() {
    console.log('Cancelar');
  }

}
