import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterItemComponent } from './manter-item.component';

describe('ManterItemComponent', () => {
  let component: ManterItemComponent;
  let fixture: ComponentFixture<ManterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
