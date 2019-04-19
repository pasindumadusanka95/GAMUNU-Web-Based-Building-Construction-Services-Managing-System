import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
}
