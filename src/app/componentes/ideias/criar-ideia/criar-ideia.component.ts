import { Component, OnInit } from '@angular/core';
import { Ideia } from '../ideia';

@Component({
  selector: 'app-criar-ideia',
  templateUrl: './criar-ideia.component.html',
  styleUrls: ['./criar-ideia.component.css']
})
export class CriarIdeiaComponent implements OnInit {

  ideia: Ideia = {
    id: 1,
    conteudo: 'Minha ideia Angular',
    autor: 'Eu mesmo',
    modelo: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarIdeia() {
    console.log('Criar ideia');
  }

  cancelar() {
    console.log('Cancelar');
  }

}
