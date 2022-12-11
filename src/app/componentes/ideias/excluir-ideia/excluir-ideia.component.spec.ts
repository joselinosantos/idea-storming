import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirIdeiaComponent } from './excluir-ideia.component';

describe('ExcluirIdeiaComponent', () => {
  let component: ExcluirIdeiaComponent;
  let fixture: ComponentFixture<ExcluirIdeiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirIdeiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirIdeiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
