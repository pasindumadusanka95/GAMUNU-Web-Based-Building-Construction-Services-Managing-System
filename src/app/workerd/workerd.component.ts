import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../shared/worker.service';
import { Worker } from '../shared/worker.model';

@Component({
  selector: 'app-workerd',
  templateUrl: './workerd.component.html',
  styleUrls: ['./workerd.component.scss']
})
export class WorkerdComponent implements OnInit {

  constructor(public workerService:WorkerService) { }

  ngOnInit() {
    this.workerService.getname();
  }

}
