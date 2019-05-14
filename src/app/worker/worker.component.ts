import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/user.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

	// userDetails;
  constructor(
	  private authService: AuthService,
	  private router: Router,
  ) { }

  ngOnInit() {
	//   this.authService.getUserProfile().subscribe(
	// 	  res => {
	// 		  this.userDetails = res['user']
	// 	  },
	// 	  err => {
	// 		  console.log(err);
	// 	  }
	//   );
  }

}
