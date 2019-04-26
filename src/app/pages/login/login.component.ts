import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { LoginUser } from '../../shared/login-user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  user = new LoginUser();
  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  display() {
    if (!this.user.nic && !this.user.password) {
      alert("NIC and Password missing")
    } else if (!this.user.nic) {
      alert("NIC is missing")
    } else if (!this.user.password) {
      alert("Password Missing")
    }
    console.log(this.user);
  }

}
