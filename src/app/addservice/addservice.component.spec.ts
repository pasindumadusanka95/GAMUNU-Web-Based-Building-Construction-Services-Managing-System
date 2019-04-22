import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddserviceComponent } from './addservice.component';

describe('AddserviceComponent', () => {
  let component: AddserviceComponent;
  let fixture: ComponentFixture<AddserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
