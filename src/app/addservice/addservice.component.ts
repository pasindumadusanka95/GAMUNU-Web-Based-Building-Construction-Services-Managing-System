import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../shared/service.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css'],
  providers: [ServiceService]
})
export class AddserviceComponent implements OnInit {
  closeResult: string;
  @Input() x:string = "Hello ";
  constructor(
    public modalService: NgbModal,
    public serviceService: ServiceService,
   public toastr : ToastrService,
   public activeModal: NgbActiveModal) { }





  ngOnInit() {
    this.resetForm();
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

  onSubmit(form : NgForm){
    this.serviceService.postService(form.value).subscribe((res)=>{
      this.resetForm(form);
     // M.toast({html: 'Saved Successfully', classes: 'rounded'});
    });
  }
}
