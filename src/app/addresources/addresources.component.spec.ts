import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresourcesComponent } from './addresources.component';

xdescribe('AddresourcesComponent', () => {
  let component: AddresourcesComponent;
  let fixture: ComponentFixture<AddresourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddresourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
