import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-view-projectsd',
  templateUrl: './view-projectsd.component.html',
  styleUrls: ['./view-projectsd.component.scss']
})
export class ViewProjectsdComponent implements OnInit {

  constructor(public projectService:ProjectService ) {
  }

  ngOnInit() {
    this.refreshProjectList();
  }
  refreshProjectList(){
    this.projectService.getProjectList1().subscribe((res)=>{
      this.projectService.projects = res as Project[];
    });
  }

}
