import { Component, OnInit } from '@angular/core';
import { Resource } from '../shared/resource.model';
import { OrderService } from '../shared/order.service';
import { ResourceService } from '../shared/resource.service';
import { Order } from '../shared/order.model';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  constructor( public orderService:OrderService,
    public resourceService:ResourceService) { }

  ngOnInit() {
    this.refreshOrderList();
    this.refreshResourceList();
  }
  refreshOrderList(){
    this.orderService.getOrderList().subscribe((res)=>{
      this.orderService.orders= res as Order[];
    });
  }

  refreshResourceList(){
    this.resourceService.getResourceList().subscribe((res)=>{
      this.resourceService.resource = res as Resource[];
    });
  }
}

