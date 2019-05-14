import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/user.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  
	userDetails;
	constructor(
		private authService: AuthService,
		private router: Router,
	) { }
  
	ngOnInit() {
		console.log("Onit runs")
		this.authService.getUserProfile().subscribe(
			res => {
				if (!res) {
					console.log("Empty");
				}
				else{
					console.log("object");
				}
				this.userDetails = res['user']
			},
			err => {
				console.log(err);
			}
		);
	}

}
