import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { Order } from '../shared/order.model';
import { ServiceService } from '../shared/service.service';
import { Service } from '../shared/service.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  providers: [ServiceService]
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
  if(form.value._id==''){
  this.serviceService.postService(form.value).subscribe((res)=>{
    this.resetForm(form);
    this.refreshServiceList();
   // M.toast({html: 'Saved Successfully', classes: 'rounded'});
  });
}
else{
// tslint:disable-next-line: deprecation
  this.serviceService.putService(form.value).subscribe((res)=>{
    this.resetForm(form);
    this.refreshServiceList();
  });
}
}

onEdit(ser:Service){
  this.serviceService.selectedService= ser;
}

onDelete(_id:string , form:NgForm ){
  if(confirm('Are you sure to delete this record?')==true){
    this.serviceService.deleteService(_id).subscribe((res)=>{
      this.refreshServiceList();
      this.resetForm(form);
    },
    (e) => console.log(e.message));
  }
}
}
