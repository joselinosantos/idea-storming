import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-ideia',
  templateUrl: './criar-ideia.component.html',
  styleUrls: ['./criar-ideia.component.css']
})
export class CriarIdeiaComponent implements OnInit {

  ideia = {
    id: '1',
    conteudo: 'Minha ideia',
    autor: 'Eu mesmo',
    modelo: ''
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
