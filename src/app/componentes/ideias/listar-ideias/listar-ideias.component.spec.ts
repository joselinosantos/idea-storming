import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarIdeiasComponent } from './listar-ideias.component';

describe('ListarIdeiasComponent', () => {
  let component: ListarIdeiasComponent;
  let fixture: ComponentFixture<ListarIdeiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarIdeiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarIdeiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
