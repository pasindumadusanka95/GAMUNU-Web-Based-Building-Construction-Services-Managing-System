import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddserviceComponent } from './addservice.component';

xdescribe('AddserviceComponent', () => {
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

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
