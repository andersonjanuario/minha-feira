import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterCompraComponent } from './manter-compra.component';

describe('ManterCompraComponent', () => {
  let component: ManterCompraComponent;
  let fixture: ComponentFixture<ManterCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
