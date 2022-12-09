import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarIdeiaComponent } from './criar-ideia.component';

describe('CriarIdeiaComponent', () => {
  let component: CriarIdeiaComponent;
  let fixture: ComponentFixture<CriarIdeiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarIdeiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarIdeiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
