import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; 

import { LoginUser } from '../../shared/login-user';
import { AuthService } from '../../shared/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  nic: String
  password: String
  constructor(
	  public Auth : AuthService, 
	  private toastr: ToastrService,
	  private router: Router 
	  ) { }

  user = {
	  username: '',
	  password: ''
  };
  nicRegex = /^[0-9]{9}[x|X|v|V]$/

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  onSubmit(form: NgForm) {
		// this.Auth.checkUser(form.value).subscribe(checkedUser => {
		// 	if (!checkedUser) {
		// 		this.toastr.success("Sorry. Please register first",'Error')
		// 	} else  {
		// 		console.log(checkedUser)
		// 	} 
		// })

		this.Auth.login(form.value).subscribe(
			res => {
				console.log(res)
				this.Auth.setToken(res['token']);
				this.router.navigateByUrl('/userprofile')
			},
			err => {
				this.toastr.error("Sorry. Please register first",'Error')
			}
		);

    }

}
