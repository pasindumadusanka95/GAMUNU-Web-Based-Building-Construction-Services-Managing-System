import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Jobapply } from 'src/app/shared/jobapply.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	job = new Jobapply();


  constructor() { }

  ngOnInit() {
  }

  display(){
	  console.log(this.job);
  }

}
