import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../shared/service.service';
import { NgForm } from '@angular/forms';
import { Service } from '../shared/service.model';
@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent implements OnInit {
  closeResult: string;
  constructor(
    public serviceService: ServiceService) { }





  ngOnInit() {
    this.resetForm();
    this.refreshServiceList();
  }
  resetForm(form?: NgForm){
    if(form){
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

  refreshServiceList(){
    this.serviceService.getServiceList().subscribe((res)=>{
      this.serviceService.service= res as Service[];
    });
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
}
