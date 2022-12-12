import { IdeiaService } from './../ideia.service';
import { Component, OnInit } from '@angular/core';
import { Ideia } from '../ideia';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-ideia',
  templateUrl: './criar-ideia.component.html',
  styleUrls: ['./criar-ideia.component.css']
})
export class CriarIdeiaComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private service: IdeiaService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['Reactive forms Angular'],
      autor: ['Dev JS'],
      modelo: ['modelo1']
    })
  }

  criarIdeia() {
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listar-ideias'])
    })
  }

  cancelar() {
    this.router.navigate(['/listar-ideias'])
  }

}
