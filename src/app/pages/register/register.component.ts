import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Jobapply } from 'src/app/shared/jobapply.model';
import { JobapplyService } from 'src/app/shared/jobapply.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  job = new Jobapply();

  constructor(
	  public jobApplyService: JobapplyService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
	// console.log(this.job);
	this.jobApplyService.awaitJobApply(this.job)
  }

//   postWorker(wor: Worker) {
//     return this.http.post(this.baseURL, wor);
//   }
}
