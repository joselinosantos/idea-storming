import { Component, Input, OnInit } from '@angular/core';
import { Ideia } from '../ideia';

@Component({
  selector: 'app-ideia',
  templateUrl: './ideia.component.html',
  styleUrls: ['./ideia.component.css']
})
export class IdeiaComponent implements OnInit {
  @Input() ideia: Ideia = {
    id: 0,
    conteudo: 'Aprendendo Angular',
    autor: 'JS',
    modelo: 'modelo3'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
