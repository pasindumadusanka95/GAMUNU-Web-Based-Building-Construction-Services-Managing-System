import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceComponent } from 'src/app/service/service.component';
import { ResourcesComponent } from 'src/app/resources/resources.component';
import { ProjectsComponent } from 'src/app/projects/projects.component';
import { AddserviceComponent } from 'src/app/addservice/addservice.component';
import { AddprojectsComponent } from 'src/app/addprojects/addprojects.component';
import { AddresourcesComponent } from 'src/app/addresources/addresources.component';
import { ServiceService } from 'src/app/shared/service.service';
import {
  ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule
} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatButtonModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalendarComponent } from '../../pages/calendar/calendar.component';
import { StatisticsComponent } from '../../pages/statistics/statistics.component';

@NgModule({
  imports: [
    CommonModule,
    ToastNoAnimationModule.forRoot({      // Register NgxToast NPM module
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ToastrModule.forRoot({      // Register NgxToast NPM module
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,

    }),
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    SharedModule,
    ChartsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  declarations: [
    DashboardComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    ServiceComponent,
    ResourcesComponent,
    ProjectsComponent,
    AddserviceComponent,
    AddresourcesComponent,
    AddprojectsComponent,
    CalendarComponent,
    StatisticsComponent
  ],
  providers: [
  ],

})

export class AdminLayoutModule { }
