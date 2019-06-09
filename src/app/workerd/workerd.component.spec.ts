import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerdComponent } from './workerd.component';

describe('WorkerdComponent', () => {
  let component: WorkerdComponent;
  let fixture: ComponentFixture<WorkerdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
