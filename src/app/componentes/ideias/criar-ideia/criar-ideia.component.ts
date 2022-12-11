import { IdeiaService } from './../ideia.service';
import { Component, OnInit } from '@angular/core';
import { Ideia } from '../ideia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-ideia',
  templateUrl: './criar-ideia.component.html',
  styleUrls: ['./criar-ideia.component.css']
})
export class CriarIdeiaComponent implements OnInit {

  ideia: Ideia = {
    conteudo: '',
    autor: '',
    modelo: 'modelo1'
  }

  constructor(private service: IdeiaService, private router: Router) { }

  ngOnInit(): void {
  }

  criarIdeia() {
    this.service.criar(this.ideia).subscribe(() => {
      this.router.navigate(['/listar-ideias'])
    })
  }

  cancelar() {
    this.router.navigate(['/listar-ideias'])
  }

}
