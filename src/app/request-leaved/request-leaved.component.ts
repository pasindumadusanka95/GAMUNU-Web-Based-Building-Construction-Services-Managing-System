import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RequestLeaveService } from '../shared/request-leave.service';
import { Leave } from '../shared/request-leave.model';

@Component({
  selector: 'app-request-leaved',
  templateUrl: './request-leaved.component.html',
  styleUrls: ['./request-leaved.component.scss']
})
export class RequestLeavedComponent implements OnInit {
  @ViewChild('leaveForm') leave_form;
  constructor(public requestLeaveService: RequestLeaveService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm(this.leave_form);

  }
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.requestLeaveService.selected = {

      from_date: '',
      to_date: '',
      sick:false,
      bereavement:false,
      timeoff:false,
      other:'',


      };
    }
  }

  onSubmit(form : NgForm){


      console.log(form.value);
    this.requestLeaveService.postLeave(form.value).subscribe((res)=>{
      this.resetForm(form);

      this.toastr.success('Submitted Successfully', 'leave Data');
    });

}

}
