import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { ProjectService } from '../shared/project.service';
import { Order } from '../shared/order.model';
import { Project } from '../shared/project.model';
import { JobapplyService } from '../shared/jobapply.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor( public orderService:OrderService,
    public projectService:ProjectService,
    public jobapplyService:JobapplyService) { }

  ngOnInit() {
    this.refreshOrderList();
    this.refreshProjectList();
    this.resetForm();
  }
  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.projectService.selectedProject = {
      _id: '',
      project_id: null,
      order_id: null,
      project_name: '',
      start_date: '',
      end_date: '',
      project_loc: '',
      cus_name: '',
      project_status: '',
      project_cost: null,
      worker_count: null,


      };
    }
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
  onSubmit(form : NgForm){
    if(form.value._id==''){
    this.projectService.postProject(form.value).subscribe((res)=>{
      this.resetForm(form);
      this.refreshProjectList();
     // M.toast({html: 'Saved Successfully', classes: 'rounded'});
    });
  } else{
  // tslint:disable-next-line: deprecation
    this.projectService.putProject(form.value).subscribe((res)=>{
      this.resetForm(form);
      this.refreshProjectList();
    });
  }
}
onEdit(pro:Project){
  this.projectService.selectedProject = pro;
}
  onDelete(_id:string , form:NgForm ){
    if(confirm('Are you sure to delete this record?')==true){
      this.projectService.deleteProject(_id).subscribe((res)=>{
        this.refreshProjectList();
        this.resetForm(form);
      },
      (e) => console.log(e.message));
    }
  }
}


