import { Injectable } from '@angular/core';
import {Leave} from './request-leave.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestLeaveService {


  selected: Leave;
  readonly baseURL= 'http://localhost:4200/worker/leave';

  constructor(private http: HttpClient) { }

  postLeave(leav:Leave){
    return this.http.post(this.baseURL,leav);
  }
}
