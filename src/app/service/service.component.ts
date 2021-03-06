import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { Order } from '../shared/order.model';
import { ServiceService } from '../shared/service.service';
import { Service } from '../shared/service.model';
import { NgForm } from '@angular/forms';
import { JobapplyService } from '../shared/jobapply.service';
import { ProjectService } from '../shared/project.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],

})
export class ServiceComponent implements OnInit {

  constructor(public orderService: OrderService,
    public serviceService: ServiceService,
    public jobapplyService: JobapplyService,
    public projectService: ProjectService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.refreshOrderList();
    this.refreshServiceList();
    this.resetForm();
    this.projectService.setProjectCount();
    this.orderService.setOrderCount();
  }


  refreshOrderList() {
    this.orderService.getOrderList().subscribe((res) => {
      this.orderService.orders = res as Order[];
    });
  }

  refreshServiceList() {
    this.serviceService.getServiceList().subscribe((res) => {
      this.serviceService.service = res as Service[];
    });
  }


  resetForm(form?: NgForm) {
    if (form) {
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

  onSubmit(form: NgForm) {
    if (form.value._id == '') {

      this.serviceService.postService(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshServiceList();

      });
    }
    else {
      // tslint:disable-next-line: deprecation
      this.serviceService.putService(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshServiceList();

      });
    }
  }

  onEdit(ser: Service) {
    this.serviceService.selectedService = ser;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record?') == true) {
      this.serviceService.deleteService(_id).subscribe((res) => {
        this.refreshServiceList();
        this.resetForm(form);
        this.toastr.error('Deleted Successfully', 'Service Data');
      },
        (e) => console.log(e.message));
    }
  }
}
