import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarIdeiaComponent } from './editar-ideia.component';

describe('EditarIdeiaComponent', () => {
  let component: EditarIdeiaComponent;
  let fixture: ComponentFixture<EditarIdeiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarIdeiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarIdeiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
