import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Resource} from './resource.model';


@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  selectedResource: Resource;
  resource: Resource[];
  readonly baseURL= 'http://localhost:3000/resources';

  constructor(private http: HttpClient) { }

  postResource(reso: Resource){
    return this.http.post(this.baseURL,reso);
  }

  getResourceList(){
    return this.http.get(this.baseURL);
  }
  putResource(reso: Resource){
    return this.http.put(this.baseURL + `/${reso._id}`, reso);
  }
  deleteResource(_id:String){
    return this.http.delete(this.baseURL+`/${_id}`);
  }
}
