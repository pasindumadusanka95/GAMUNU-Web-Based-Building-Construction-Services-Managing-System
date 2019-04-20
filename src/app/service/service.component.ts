import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { Order } from '../shared/order.model';
import { ServiceService } from '../shared/service.service';
import { Service } from '../shared/service.model';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AddserviceComponent } from '../addservice/addservice.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(public orderService:OrderService,
    public serviceService: ServiceService
    ) { }

  ngOnInit() {
   this.refreshOrderList();
   this.refreshServiceList();
   this.resetForm();
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


resetForm(form?: NgForm){
  if (form){
    form.reset();
    this.serviceService.selectedService = {
    _id: '',
    service_id: null,
    service_name: '',
    service_type: '',
    price: '',

    };
  }
}

onSubmit(form : NgForm){
  this.serviceService.postService(form.value).subscribe((res)=>{
    this.resetForm(form);
   // M.toast({html: 'Saved Successfully', classes: 'rounded'});
  });
}
}
