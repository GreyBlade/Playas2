import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMarcadorComponent } from './agregar-marcador.component';

describe('AgregarMarcadorComponent', () => {
  let component: AgregarMarcadorComponent;
  let fixture: ComponentFixture<AgregarMarcadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarMarcadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMarcadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
