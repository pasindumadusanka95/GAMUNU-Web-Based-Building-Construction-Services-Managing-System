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

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  constructor(public orderService: OrderService,
     public jobapplyService:JobapplyService,
     public workerService: WorkerService
     ) { }

  ngOnInit() {
    this.refreshOrderList();
    this.refreshWorkerList();
    this.refreshJobapplyList();
    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});
  }





  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
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
