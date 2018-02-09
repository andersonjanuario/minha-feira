import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterMercadoComponent } from './manter-mercado.component';

describe('MercadoComponent', () => {
  let component: ManterMercadoComponent;
  let fixture: ComponentFixture<ManterMercadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterMercadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
