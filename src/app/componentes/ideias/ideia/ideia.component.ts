import { Component, Input, OnInit } from '@angular/core';
import { Ideia } from '../ideia';

@Component({
  selector: 'app-ideia',
  templateUrl: './ideia.component.html',
  styleUrls: ['./ideia.component.css']
})
export class IdeiaComponent implements OnInit {
  @Input() ideia: Ideia = {
    conteudo: '',
    autor: '',
    modelo: '',
    favorito: false
  }
  constructor() { }

  ngOnInit(): void {
  }

  mudarIconeFavorito(): string {
    if (this.ideia.favorito == false || this.ideia.favorito == undefined) {
      return '-o'
    }
    return ''
  }

}
