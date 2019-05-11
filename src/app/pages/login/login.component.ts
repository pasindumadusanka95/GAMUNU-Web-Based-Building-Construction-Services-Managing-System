import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { LoginUser } from '../../shared/login-user';
import { AuthService } from '../../shared/user.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  nic: String
  password: String
  constructor(public Auth : AuthService) { }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  onSubmit(form: NgForm) {
		this.Auth.checkUser(form.value).subscribe(checkedUser => {
			// if (!checkedUser) {
			// 	console.log("No User")
			// } else  {
				console.log(checkedUser)
			// } 
		})
	// }
    // console.log(this.user);
  }

}
