import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Project} from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  selectedProject: Project;
  projectCount: Number;
  projects: Project[];
  readonly baseURL= 'http://localhost:3000/projects';
  readonly baseURLC= 'http://localhost:3000/projects/count';

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

  getProjectCount(){
    return this.projectCount;
  }

  setProjectCount() {
    this.http.get(this.baseURLC).subscribe((result:any) => {
      this.projectCount = result.count;
    }, (err) => { console.log(err)});
  }

}
