import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ideia',
  templateUrl: './ideia.component.html',
  styleUrls: ['./ideia.component.css']
})
export class IdeiaComponent implements OnInit {
  ideia = {
    conteudo: 'Angular',
    autor: 'JS',
    modelo: 'modelo3'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
