import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Us3Component } from './us3.component';

describe('Us3Component', () => {
  let component: Us3Component;
  let fixture: ComponentFixture<Us3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Us3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Us3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
