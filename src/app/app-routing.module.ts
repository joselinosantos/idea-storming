import { EditarIdeiaComponent } from './componentes/ideias/editar-ideia/editar-ideia.component';
import { ExcluirIdeiaComponent } from './componentes/ideias/excluir-ideia/excluir-ideia.component';
import { CriarIdeiaComponent } from './componentes/ideias/criar-ideia/criar-ideia.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarIdeiasComponent } from './componentes/ideias/listar-ideias/listar-ideias.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-ideias',
    pathMatch: 'full'
  },
  {
    path: 'criar-ideia',
    component: CriarIdeiaComponent
  },
  {
    path: 'listar-ideias',
    component: ListarIdeiasComponent
  },
  {
    path: 'ideias/excluir-ideia/:id',
    component: ExcluirIdeiaComponent
  },
  {
    path: 'ideias/editar-ideia/:id',
    component: EditarIdeiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
