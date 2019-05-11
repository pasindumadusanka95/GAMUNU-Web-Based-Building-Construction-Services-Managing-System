import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	// selectedJobapply: Jobapply|{}={};
	user : User |{}={};
	readonly baseURL = 'http://localhost:3000/login'

  constructor(public http: HttpClient) { }

  checkUser(user: User){
	  console.log("service worked")
	return this.http.post(this.baseURL,user);
	// console.log("User",user)
  }
}
