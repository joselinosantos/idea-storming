import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdeiaService } from './../ideia.service';
import { Component, OnInit } from '@angular/core';
import { Ideia } from '../ideia';
import { ActivatedRoute, Router } from '@angular/router';
import { minusculoValidator, maiusculoValidator } from '../criar-ideia/minusculoValidators';

@Component({
  selector: 'app-editar-ideia',
  templateUrl: './editar-ideia.component.html',
  styleUrls: ['./editar-ideia.component.css']
})
export class EditarIdeiaComponent implements OnInit {
  
  formulario!: FormGroup;

  constructor(
    private service: IdeiaService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    
    this.service.buscarPorId(parseInt(id!)).subscribe((ideia) => {
      this.formulario = this.formBuilder.group({
        id: [ideia.id],
        conteudo: [ideia.conteudo, Validators.compose([Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
        autor: [ideia.autor, Validators.compose([Validators.required, Validators.minLength(3), minusculoValidator, maiusculoValidator])],
        modelo: [ideia.modelo]
      })
    })
  }

  editarIdeia() {
    if(this.formulario.valid) {
      this.service.editar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listar-ideias'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listar-ideias'])
  }

  habilitarBtn(): string {
    if (this.formulario.valid) {
      return 'btn'
    }
    return ''
  }
}
