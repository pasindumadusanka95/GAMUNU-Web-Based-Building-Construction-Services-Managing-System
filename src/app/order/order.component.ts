import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [OrderService]
})
export class OrderComponent implements OnInit {

  constructor(public orderService: OrderService) { }

  ngOnInit() {
  }

resetForm(form?: NgForm){
  if(form){
    form.reset();
    this.orderService.selectedOrder = {
    _id: '',
    date: '',
    order_id: null,
    service_id: null,
    cus_name: '',
    cus_phone: null,
    cus_address: '',
    cus_email: '',
    payment_id: null
    }
  }
}

}
