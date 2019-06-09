import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectsdComponent } from './view-projectsd.component';

describe('ViewProjectsdComponent', () => {
  let component: ViewProjectsdComponent;
  let fixture: ComponentFixture<ViewProjectsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProjectsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProjectsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
