import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; 

import { NgForm } from '@angular/forms';
import { Jobapply } from 'src/app/shared/jobapply.model';
import { JobapplyService } from 'src/app/shared/jobapply.service';

declare var M: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  job = new Jobapply();

  constructor(
	  public jobApplyService: JobapplyService,
	  private toastr: ToastrService
  ) { }

  ngOnInit() {
	this.resetForm();
  }

  resetForm(form?: NgForm){
	//   console.log(form.value)
	  if (form) {
		form.reset();
		this.jobApplyService.selectedJobapply = {
			_id: "" ,
			worker_id: "",
			worker_name: "",
			worker_nic: "",
			worker_phone : "",
			worker_address: "",
			job_type: "",
			worker_password:""
		}
	}
  }

  onSubmit(form : NgForm){
	  this.jobApplyService.postJobapply(form.value).subscribe((res) => {
		  this.resetForm(form);
		  this.toastr.success("You will get an email, when we confirm your data",'Success')
		  this.toastr.success("Application saved",'Success')
	  })
}

//   postWorker(wor: Worker) {
//     return this.http.post(this.baseURL, wor);
//   }
}
