import { Routes } from '@angular/router';

import { RequestLeavedComponent } from '../request-leaved/request-leaved.component';
import { ViewProjectsdComponent} from '../view-projectsd/view-projectsd.component';

export const WorkerRoutes: Routes = [
  { path: 'leave', component:RequestLeavedComponent },
  { path: 'viewProjects', component:ViewProjectsdComponent },
];
