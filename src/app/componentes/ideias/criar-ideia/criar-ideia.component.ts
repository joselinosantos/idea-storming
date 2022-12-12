import { IdeiaService } from './../ideia.service';
import { Component, OnInit } from '@angular/core';
import { Ideia } from '../ideia';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      conteudo: ['', Validators.compose([Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
      autor: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      modelo: ['modelo1']
    })
  }

  criarIdeia() {
    if(this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listar-ideias'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listar-ideias'])
  }

  habilitarBtn(): string {
    if (this.formulario.valid) {
      return 'btn-salva'
    }
    return ''
  }

}
