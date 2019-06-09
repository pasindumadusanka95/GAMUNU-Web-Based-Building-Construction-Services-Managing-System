import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Worker} from './worker.model';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  selectedWorker: Worker;
  worker: Worker[];
  readonly baseURL= 'http://localhost:3000/workers';
  readonly baseURLW= 'http://localhost:4200/worker';
  constructor(private http: HttpClient) { }

  postWorker(wor: Worker){
    return this.http.post(this.baseURL,wor);
  }
  getname(){
    return this.http.get(this.baseURLW);
  }
  getWorkerList(){
    return this.http.get(this.baseURL);
  }
  putWorker(wor: Worker){
    return this.http.put(this.baseURL + `/${wor._id}`, wor);
  }
  deleteWorker(_id:String){
    return this.http.delete(this.baseURL+`/${_id}`);
  }
}
