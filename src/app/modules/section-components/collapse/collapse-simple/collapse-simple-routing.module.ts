import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollapseSimpleApiComponent } from './pages/collapse-simple-api/collapse-simple-api.component';
import { CollapseSimpleExamplesComponent } from './pages/collapse-simple-examples/collapse-simple-examples.component';
import { CollapseSimpleOverviewComponent } from './pages/collapse-simple-overview/collapse-simple-overview.component';

const routes: Routes = [
  { path: 'overview', component: CollapseSimpleOverviewComponent },
  { path: 'api', component: CollapseSimpleApiComponent },
  { path: 'examples', component: CollapseSimpleExamplesComponent },
  { path: '**', redirectTo: 'overview', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollapseSimpleRoutingModule {}
