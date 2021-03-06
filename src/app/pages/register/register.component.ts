import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
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
	  private toastr: ToastrService,
	  private router: Router 
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
			worker_id: 0,
			worker_name: "",
			worker_nic: "",
			worker_phone : 0,
			worker_address: "",
			job_type: "",
			worker_password:""
		}
	}
  }

  onSubmit(form : NgForm){
	  this.jobApplyService.postJobapply(form.value).subscribe((res) => {
		//   this.resetForm(form);
		  this.toastr.success("Application saved. You will get an email, when we confirm your data",'Success')
		//   this.toastr.success("",'Success')
		this.router.navigateByUrl('/')
	  })
}

//   postWorker(wor: Worker) {
//     return this.http.post(this.baseURL, wor);
//   }
}
