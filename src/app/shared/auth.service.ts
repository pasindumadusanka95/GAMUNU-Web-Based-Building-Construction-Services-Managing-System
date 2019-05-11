import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	readonly baseURL = 'http://localhost:3000/login'

  constructor(public http: HttpClient) { }

  checkUser(user){
	return this.http.post(this.baseURL,user);
	console.log("User",user)
  }
}
