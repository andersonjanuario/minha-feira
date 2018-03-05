import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarItemComponent } from './listar-item.component';

describe('ListarItemComponent', () => {
  let component: ListarItemComponent;
  let fixture: ComponentFixture<ListarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
