import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Edu3Component } from './edu3.component';

describe('Edu3Component', () => {
  let component: Edu3Component;
  let fixture: ComponentFixture<Edu3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Edu3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Edu3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
