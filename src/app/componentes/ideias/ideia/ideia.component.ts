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
    modelo: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
