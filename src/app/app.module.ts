import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CriarIdeiaComponent } from './componentes/ideias/criar-ideia/criar-ideia.component';
import { FormsModule } from '@angular/forms';
import { ListarIdeiasComponent } from './componentes/ideias/listar-ideias/listar-ideias.component';
import { IdeiaComponent } from './componentes/ideias/ideia/ideia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CriarIdeiaComponent,
    ListarIdeiasComponent,
    IdeiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
