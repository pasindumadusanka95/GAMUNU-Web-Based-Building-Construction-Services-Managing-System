import { TestBed } from '@angular/core/testing';

import { OrderService } from './order.service';

xdescribe('OrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: OrderService = TestBed.get(OrderService);
    expect(service).toBeTruthy();
  });
});
