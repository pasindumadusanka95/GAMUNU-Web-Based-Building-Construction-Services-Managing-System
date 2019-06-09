import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {  ToastrModule } from 'ngx-toastr';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthGuard } from './shared/auth/auth.guard';
import { AuthInterceptor } from './shared/auth/auth.interceptor';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { OrderComponent } from './order/order.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { AddresourcesComponent } from './addresources/addresources.component';
import { AddprojectsComponent } from './addprojects/addprojects.component';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavigationBarComponent } from './pages/navigation-bar/navigation-bar.component';
import { RegisterComponent } from './pages/register/register.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { WorkerComponent } from './worker/worker.component';
import {UserProfileComponent} from './pages/user-profile/user-profile.component'

import { AuthService } from './shared/user.service'
import { SharedModule } from './shared/shared.module';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot({      // Register NgxToast NPM module
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    MatButtonModule,
    MatCheckboxModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    OrderComponent,
    LoginComponent,
    HomepageComponent,
    NavigationBarComponent,
  RegisterComponent,
  WorkerComponent,
//   DashboardComponent
  // UserProfileComponent
  ],
  providers: [
	  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
	NgbActiveModal,
	AuthGuard,
	AuthService,
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
