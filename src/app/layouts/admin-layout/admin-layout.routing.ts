import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ServiceComponent } from 'src/app/service/service.component';
import { ResourcesComponent } from 'src/app/resources/resources.component';
import { ProjectsComponent } from 'src/app/projects/projects.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'resources',   component: ResourcesComponent},
    { path: 'projects',         component: ProjectsComponent },
    { path: 'services',          component: ServiceComponent },
    { path: 'maps',           component: MapsComponent }
];
