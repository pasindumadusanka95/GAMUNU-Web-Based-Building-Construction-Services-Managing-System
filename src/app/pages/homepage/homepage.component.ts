import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { WorkerService } from 'src/app/shared/worker.service';
import { ProjectService } from 'src/app/shared/project.service';
import { OrderService } from 'src/app/shared/order.service';
import { ServiceService } from 'src/app/shared/service.service';
import { Service } from 'src/app/shared/service.model'; 
import { Order } from 'src/app/shared/order.model';
import { DatePipe } from '@angular/common';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-homepage',
	templateUrl: './homepage.component.html',
	providers: [DatePipe],
	styleUrls: ['./homepage.component.scss'],
	encapsulation: ViewEncapsulation.None,

})
export class HomepageComponent implements OnInit {

	workers: number;
	projects: number;
	orders: number;
	closeResult: string;
	order=new Order;
	modalReference:any;
	myDate = new Date();
	service_idHasError=true; /////For Validation////////
	formError=false; /////For Validation////////

	constructor(private workerService: WorkerService,
		private modalService: NgbModal,
		private projectService: ProjectService,
		private orderService: OrderService,
		private serviceService: ServiceService,
		private datePipe: DatePipe ) {}

  ngOnInit() {
	this.getWorkerCount();
	this.getProjectCount();
	this.getOrderCount();
	this.getService();
  }

  getWorkerCount(){
	this.workerService.getWorkerList().subscribe((res) => {
		this.workers = Object.keys(res).length;
	})
  }

  getProjectCount(){
	this.projectService.getProjectList().subscribe((res) => {
		this.projects = Object.keys(res).length;
	})
  }
  getOrderCount(){
	this.orderService.getOrderList().subscribe((res) => {
		this.orders = Object.keys(res).length;
	})
	}
	
//////Order Form Modal /////
open(content) {
	this.modalReference =this.modalService.open(content, {backdropClass: 'light-blue-backdrop', size: 'lg'});
	this.orderService.selectedOrder = {
		_id: "" ,
		date: this.datePipe.transform(this.myDate, 'yyyy-MM-dd'),
		order_id:0,
		service_id:"" ,
		cus_name:"" ,
		cus_phone:null ,
		cus_address: "",
		cus_email:"" ,
		payment_id:0 ,
		order_status:"requested",
	}
	this.service_idHasError=true;
	this.resetForm();
	this.formError=false;
}

getService(){
	this.serviceService.getServiceList().subscribe((res) => {
		this.serviceService.service = res as Service[];
	})
}

resetForm(form?: NgForm){
	  if (form) {
		form.reset();
		this.orderService.selectedOrder = {
			_id: "" ,
			date: this.datePipe.transform(this.myDate, 'yyyy-MM-dd'),
			order_id:0,
			service_id:"" ,
			cus_name:"" ,
			cus_phone:null ,
			cus_address: "",
			cus_email:" " ,
			payment_id:0 ,
			order_status:"requested" ,
		}
	}
  }
  onSubmit(form : NgForm){
	if(form.value.cus_name!=''&&form.value.cus_phone.length==10&&form.value.cus_address!=''&&
	form.value.cus_email!=''&&!this.service_idHasError){
	    this.orderService.postOrder(form.value).subscribe((res) => {})
		this.modalReference.close();
		this.resetForm(form);
		this.formError=false;
		alert("Your Order Has Been Placed");
	}else{
		this.formError=true;
	}
}
closeModal(form : NgForm){
		this.modalReference.close();
		this.resetForm(form);
}
///////////////////////////////Modal End/////////////////////////////////////////

Validate_serviceID(value){
	if(value=='default' || value==''){
		this.service_idHasError=true;
	}else{
		this.service_idHasError=false;
	}
}

}
