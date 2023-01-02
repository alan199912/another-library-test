import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbApiComponent } from './pages/breadcrumb-api/breadcrumb-api.component';
import { BreadcrumbExamplesComponent } from './pages/breadcrumb-examples/breadcrumb-examples.component';
import { BreadcrumbOverviewComponent } from './pages/breadcrumb-overview/breadcrumb-overview.component';

const routes: Routes = [
  { path: 'overview', component: BreadcrumbOverviewComponent },
  { path: 'api', component: BreadcrumbApiComponent },
  { path: 'examples', component: BreadcrumbExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreadcrumbRoutingModule {}
