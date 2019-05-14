import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	// selectedJobapply: Jobapply|{}={};
	user : User |{}={};
	readonly baseURL = 'http://localhost:3000/login'
	noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(public http: HttpClient) { }

//   checkUser(user: User){
// 	  console.log("service worked")
// 	  console.log(user);
// 	return this.http.post(this.baseURL,user);
// 	// console.log("User",user)
//   }

	//http methods
  login(user: User){
	return this.http.post(this.baseURL,user,this.noAuthHeader);   
  }

  getUserProfile(){
	return this.http.get('http://localhost:3000/userProfile');
  }

  //helper methods
  setToken(token: string){
	  localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken(){
	  localStorage.removeItem('token');
  }

  getUserPayload(){
	  var token = localStorage.getItem('token');
	  if (token) {
		  var userPayload = atob(token.split('.')[1])
		  return JSON.parse(userPayload);
	  }
	  else{
		  return null
	  }
  }

  isLoggedIn(){
	  var userPayload = this.getUserPayload();
	  if (userPayload) {
		  return userPayload.exp > Date.now() / 1000
	  }
	  else{
		  return false;
	  }
  }
}
