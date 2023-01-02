import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlertApiComponent } from './pages/alert-api/alert-api.component';
import { AlertExamplesComponent } from './pages/alert-examples/alert-examples.component';
import { AlertOverviewComponent } from './pages/alert-overview/alert-overview.component';

const routes: Routes = [
  { path: 'overview', component: AlertOverviewComponent },
  { path: 'api', component: AlertApiComponent },
  { path: 'examples', component: AlertExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertRoutingModule {}
