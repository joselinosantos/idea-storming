import { IdeiaService } from './../ideia.service';
import { Component, OnInit } from '@angular/core';
import { Ideia } from '../ideia';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-ideia',
  templateUrl: './editar-ideia.component.html',
  styleUrls: ['./editar-ideia.component.css']
})
export class EditarIdeiaComponent implements OnInit {
  ideia: Ideia = {
    id: 0,
    conteudo: '',
    autor: '',
    modelo: ''
  }
  constructor(
    private service: IdeiaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((ideia) => {
        this.ideia = ideia
    })
  }

editarIdeia() {
  this.service.editar(this.ideia).subscribe(() => {
    this.router.navigate(['/listar-ideias'])
  })
}

cancelar() {
  this.router.navigate(['/listar-ideias'])
}


}
