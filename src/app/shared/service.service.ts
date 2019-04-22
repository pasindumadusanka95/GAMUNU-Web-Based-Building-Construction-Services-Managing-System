import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Service} from './service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  selectedService: Service;
  service: Service[];
  readonly baseURL= 'http://localhost:3000/services';

  constructor(private http: HttpClient) { }

  postService(ser: Service){
    return this.http.post(this.baseURL,ser);
  }

  getServiceList(){
    return this.http.get(this.baseURL);
  }
  putService(ser: Service){
    return this.http.put(this.baseURL + `/${ser._id}`, ser);
  }
  deleteService(_id:String){
    return this.http.delete(this.baseURL+`+/${_id}`);
  }
}
