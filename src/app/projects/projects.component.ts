import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { ProjectService } from '../shared/project.service';
import { Order } from '../shared/order.model';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor( public orderService:OrderService,
    public projectService:ProjectService) { }

  ngOnInit() {
    this.refreshOrderList();
    this.refreshProjectList();
  }
  refreshOrderList(){
    this.orderService.getOrderList().subscribe((res)=>{
      this.orderService.orders= res as Order[];
    });
  }

  refreshProjectList(){
    this.projectService.getProjectList().subscribe((res)=>{
      this.projectService.projects = res as Project[];
    });
  }
}


