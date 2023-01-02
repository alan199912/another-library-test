import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationApiComponent } from './pages/pagination-api/pagination-api.component';
import { PaginationExamplesComponent } from './pages/pagination-examples/pagination-examples.component';
import { PaginationOverviewComponent } from './pages/pagination-overview/pagination-overview.component';

const routes: Routes = [
  { path: 'overview', component: PaginationOverviewComponent },
  { path: 'api', component: PaginationApiComponent },
  { path: 'examples', component: PaginationExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginationRoutingModule {}
