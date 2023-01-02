import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressBarApiComponent } from './pages/progress-bar-api/progress-bar-api.component';
import { ProgressBarExamplesComponent } from './pages/progress-bar-examples/progress-bar-examples.component';
import { ProgressBarOverviewComponent } from './pages/progress-bar-overview/progress-bar-overview.component';

const routes: Routes = [
  { path: 'overview', component: ProgressBarOverviewComponent },
  { path: 'api', component: ProgressBarApiComponent },
  { path: 'examples', component: ProgressBarExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressBarRoutingModule {}
