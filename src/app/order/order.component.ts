import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import {NgForm} from '@angular/forms';

//declare var M:any;
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [OrderService]
})
export class OrderComponent implements OnInit {

  constructor(public orderService: OrderService) { }

  ngOnInit() {
    this.resetForm();
  }

resetForm(form?: NgForm){
  if(form){
    form.reset();
    this.orderService.selectedOrder = {
    _id: '',
    date: '',
    order_id: null,
    service_id: '',
    cus_name: '',
    cus_phone: null,
    cus_address: '',
    cus_email: '',
    payment_id: null,
    order_status:'',
    };
  }
}

onSubmit(form : NgForm){
  this.orderService.postOrder(form.value).subscribe((res)=>{
    this.resetForm(form);
   // M.toast({html: 'Saved Successfully', classes: 'rounded'});
  });
}
}
