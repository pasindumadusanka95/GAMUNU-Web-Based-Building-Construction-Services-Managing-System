import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprojectsComponent } from './addprojects.component';

xdescribe('AddprojectsComponent', () => {
  let component: AddprojectsComponent;
  let fixture: ComponentFixture<AddprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
