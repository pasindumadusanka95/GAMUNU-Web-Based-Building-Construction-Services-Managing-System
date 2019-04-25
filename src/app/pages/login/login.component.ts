import { Component, OnInit, OnDestroy, Input } from '@angular/core';
// import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  @Input() email: string;
  @Input() password: string;
  constructor() { }

  ngOnInit() {
	  console.log(this.email)
  }
  ngOnDestroy() {
  }

}
