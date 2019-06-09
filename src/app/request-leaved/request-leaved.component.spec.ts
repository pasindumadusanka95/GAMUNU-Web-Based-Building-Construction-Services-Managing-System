import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLeavedComponent } from './request-leaved.component';

describe('RequestLeavedComponent', () => {
  let component: RequestLeavedComponent;
  let fixture: ComponentFixture<RequestLeavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestLeavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLeavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
