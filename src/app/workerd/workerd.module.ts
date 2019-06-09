import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkerRoutes } from './workerd.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RequestLeavedComponent } from '../request-leaved/request-leaved.component';
import { ViewProjectsdComponent} from '../view-projectsd/view-projectsd.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WorkerRoutes),
    FormsModule
    // NgbModule
  ],
  declarations: [
    RequestLeavedComponent,
    ViewProjectsdComponent
  ]
})
export class WorkerdModule { }
