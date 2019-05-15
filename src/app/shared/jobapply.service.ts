import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Jobapply} from './jobapply.model';

@Injectable({
  providedIn: 'root'
})
export class JobapplyService {

  selectedJobapply: Jobapply|{}={};
  jobapplys: Jobapply[];
  readonly baseURL= 'http://localhost:3000/jobapplys';

  constructor(private http: HttpClient) { }

  postJobapply(jobapp: Jobapply){
    return this.http.post(this.baseURL,jobapp);
  }

  getJobapplyList(){
    return this.http.get(this.baseURL);

  }

  putJobapply(job: Jobapply){
    return this.http.put(this.baseURL + `/${job._id}`, job);
  }
  deleteJobapply(_id:String){
    return this.http.delete(this.baseURL+`/${_id}`);
  }
}

