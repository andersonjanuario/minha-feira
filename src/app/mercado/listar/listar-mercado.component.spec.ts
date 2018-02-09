import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMercadoComponent } from './listar-mercado.component';

describe('ListarMercadoComponent', () => {
  let component: ListarMercadoComponent;
  let fixture: ComponentFixture<ListarMercadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMercadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
