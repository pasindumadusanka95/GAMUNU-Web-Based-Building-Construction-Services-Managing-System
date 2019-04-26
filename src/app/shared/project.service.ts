import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Project} from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  selectedProject: Project;
  projects: Project[];
  readonly baseURL= 'http://localhost:3000/projects';

  constructor(private http: HttpClient) { }

  postProject(pro: Project){
    return this.http.post(this.baseURL,pro);
  }

  getProjectList(){
    return this.http.get(this.baseURL);
  }
  putProject(pro: Project){
    return this.http.put(this.baseURL + `/${pro._id}`, pro);
  }
  deleteProject(_id:String){
    return this.http.delete(this.baseURL+`/${_id}`);
  }
}
