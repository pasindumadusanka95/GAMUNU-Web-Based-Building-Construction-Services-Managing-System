import { Component, OnInit } from '@angular/core';
import { WorkerService } from 'src/app/shared/worker.service';
import { ProjectService } from 'src/app/shared/project.service';
import { OrderService } from 'src/app/shared/order.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

	workers: number;
	projects: number;
	orders: number;

  constructor(private workerService: WorkerService, private projectService: ProjectService, private orderService: OrderService) { }

  ngOnInit() {
	this.getWorkerCount();
	this.getProjectCount();
	this.getOrderCount();
  }

  getWorkerCount(){
	this.workerService.getWorkerList().subscribe((res) => {
		this.workers = Object.keys(res).length;
	})
  }

  getProjectCount(){
	this.projectService.getProjectList().subscribe((res) => {
		this.projects = Object.keys(res).length;
	})
  }
  getOrderCount(){
	this.orderService.getOrderList().subscribe((res) => {
		this.orders = Object.keys(res).length;
	})
  }

}
