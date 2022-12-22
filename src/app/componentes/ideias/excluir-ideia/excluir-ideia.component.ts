import { IdeiaService } from './../ideia.service';
import { Ideia } from './../ideia';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-ideia',
  templateUrl: './excluir-ideia.component.html',
  styleUrls: ['./excluir-ideia.component.css']
})
export class ExcluirIdeiaComponent implements OnInit {
  ideia: Ideia = {
    id: 0,
    conteudo: '',
    autor: '',
    modelo: '',
    favorito: false
  }
  constructor(private service: IdeiaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((ideia) => {
      this.ideia = ideia
    })
  }

  excluirIdeia() {
    if(this.ideia.id) {
      this.service.excluir(this.ideia.id).subscribe(() => {
          this.router.navigate(['/listar-ideias'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listar-ideias'])
  }

}
