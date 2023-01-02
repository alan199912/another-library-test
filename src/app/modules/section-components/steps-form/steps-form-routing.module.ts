import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepsFormApiComponent } from './pages/steps-form-api/steps-form-api.component';
import { StepsFormExamplesComponent } from './pages/steps-form-examples/steps-form-examples.component';
import { StepsFormOverviewComponent } from './pages/steps-form-overview/steps-form-overview.component';

const routes: Routes = [
  { path: 'overview', component: StepsFormOverviewComponent },
  { path: 'api', component: StepsFormApiComponent },
  { path: 'examples', component: StepsFormExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepsFormRoutingModule {}
