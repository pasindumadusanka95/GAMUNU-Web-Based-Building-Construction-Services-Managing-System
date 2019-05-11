import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { LoginUser } from '../../shared/login-user';
import { AuthService } from '../../shared/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  contact: String
  password: String
  constructor(public Auth : AuthService) { }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  display() {
	const user = {
		cantact: this.contact,
		password: this.password
	}
    if (!user.cantact && !user.password) {
      alert("NIC and Password missing")
    } else if (!user.cantact) {
      alert("NIC is missing")
    } else if (!user.password) {
      alert("Password Missing")
	}
	else{
		this.Auth.checkUser(user)
	}
    // console.log(this.user);
  }

}
