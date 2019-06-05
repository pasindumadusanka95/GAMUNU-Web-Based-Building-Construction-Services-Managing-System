import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {OrderComponent} from './order/order.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegisterComponent } from './pages/register/register.component';
import { WorkerComponent } from './worker/worker.component';
import {UserProfileComponent} from './pages/user-profile/user-profile.component';
// import { LoginComponent } from './auth/login/login.component';

import { AuthGuard } from './shared/auth/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes =[
	  { path: '', component: HomepageComponent},
	  { path: 'order', component:OrderComponent },

	  { path: 'login', component:LoginComponent },
    { path: 'apply', component:RegisterComponent },
    { path: 'worker', component:WorkerComponent },
	{ path: 'userprofile', component:UserProfileComponent, canActivate:[AuthGuard] },
	{ path: 'gc_admin_dashb', component:DashboardComponent},
  {
    path: '',
    component: AdminLayoutComponent, // AdminLayoutComponent
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  }, {
    path: '**',
    redirectTo: 'dashboard'
  },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
