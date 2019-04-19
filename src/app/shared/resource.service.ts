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

  postResource(pro: Resource){
    return this.http.post(this.baseURL,pro);
  }

  getResourceList(){
    return this.http.get(this.baseURL);
  }
}
