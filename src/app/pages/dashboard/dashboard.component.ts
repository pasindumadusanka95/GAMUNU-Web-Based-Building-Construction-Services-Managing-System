import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { OrderService } from '../../shared/order.service';
import { JobapplyService } from '../../shared/jobapply.service';
import {Order} from '../../shared/order.model';
import {Worker} from '../../shared/worker.model'
// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import { Jobapply } from 'src/app/shared/jobapply.model';
import { WorkerService } from 'src/app/shared/worker.service';
import { ProjectService } from 'src/app/shared/project.service';
import { Project } from 'src/app/shared/project.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  constructor(public orderService: OrderService,
     public jobapplyService:JobapplyService,
     public workerService: WorkerService,
     public projectService:ProjectService,
     ) { }

  ngOnInit() {
    this.refreshOrderList();
    this.refreshWorkerList();
    this.refreshJobapplyList();
    this.refreshProjectList();
  }

AddedWorker(_id:string , job:Jobapply){
  if(confirm('Are you sure to add this one as a worker?')==true){
  this.onDeleteJob(_id);
  this.jobapplyService.selectedJobapply= job ;
  this.workerService.postWorker(job).subscribe((res)=>{

    this.refreshWorkerList();
    this.refreshJobapplyList();
  });
  }
}



onDelete(_id:string , form:NgForm ){
  if(confirm('Are you sure to delete this record?')==true){
    this.workerService.deleteWorker(_id).subscribe((res)=>{
      this.refreshWorkerList();
    },
    (e) => console.log(e.message));
  }
}

onDeleteJob(_id:string ){

    this.jobapplyService.deleteJobapply(_id).subscribe((res)=>{
      this.refreshJobapplyList();
    },
    (e) => console.log(e.message));

}



onEdit(wor:Worker){
  this.workerService.selectedWorker= wor ;
}
onSubmitJob(form : NgForm){
  if(form.value._id==''){
  this.workerService.postWorker(form.value).subscribe((res)=>{

    this.refreshWorkerList();

  });
}
}

  refreshProjectList(){
    this.projectService.getProjectList().subscribe((res)=>{
      this.projectService.projects = res as Project[];
    });
  }


  refreshOrderList(){
    this.orderService.getOrderList().subscribe((res)=>{
      this.orderService.orders= res as Order[];
    });
  }
  refreshWorkerList(){
    this.workerService.getWorkerList().subscribe((res)=>{
      this.workerService.worker= res as Worker[];
    });
  }
  refreshJobapplyList(){
    this.jobapplyService.getJobapplyList().subscribe((res)=>{
      this.jobapplyService.jobapplys= res as Jobapply[];
    });
  }


}
