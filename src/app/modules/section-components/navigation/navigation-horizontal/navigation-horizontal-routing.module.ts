import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationHorizontalApiComponent } from './pages/navigation-horizontal-api/navigation-horizontal-api.component';
import { NavigationHorizontalExamplesComponent } from './pages/navigation-horizontal-examples/navigation-horizontal-examples.component';
import { NavigationHorizontalOverviewComponent } from './pages/navigation-horizontal-overview/navigation-horizontal-overview.component';

const routes: Routes = [
  { path: 'overview', component: NavigationHorizontalOverviewComponent },
  { path: 'api', component: NavigationHorizontalApiComponent },
  { path: 'examples', component: NavigationHorizontalExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationHorizontalRoutingModule {}
