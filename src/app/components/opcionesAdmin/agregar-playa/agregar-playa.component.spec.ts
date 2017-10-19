import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPlayaComponent } from './agregar-playa.component';

describe('AgregarPlayaComponent', () => {
  let component: AgregarPlayaComponent;
  let fixture: ComponentFixture<AgregarPlayaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarPlayaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPlayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
