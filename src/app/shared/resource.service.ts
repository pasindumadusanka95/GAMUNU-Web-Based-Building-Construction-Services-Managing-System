import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Resource} from './resource.model';
import { Project } from './project.model';

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
  putService(reso: Project){
    return this.http.put(this.baseURL + `/${reso._id}`, reso);
  }
  deleteService(_id:String){
    return this.http.delete(this.baseURL+`+/${_id}`);
  }
}
