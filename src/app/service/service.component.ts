import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { Order } from '../shared/order.model';
import { ServiceService } from '../shared/service.service';
import { Service } from '../shared/service.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor(public orderService:OrderService,
    public serviceService:ServiceService) { }

  ngOnInit() {
   this.refreshOrderList();
   this.refreshServiceList();
  }

  refreshOrderList(){
    this.orderService.getOrderList().subscribe((res)=>{
      this.orderService.orders= res as Order[];
    });
  }

  refreshServiceList(){
    this.serviceService.getServiceList().subscribe((res)=>{
      this.serviceService.service= res as Service[];
    });
  }
}
