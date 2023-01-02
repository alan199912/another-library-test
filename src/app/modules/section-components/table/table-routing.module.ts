import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableApiComponent } from './pages/table-api/table-api.component';
import { TableExamplesComponent } from './pages/table-examples/table-examples.component';
import { TableOverviewComponent } from './pages/table-overview/table-overview.component';

const routes: Routes = [
  { path: 'overview', component: TableOverviewComponent },
  { path: 'api', component: TableApiComponent },
  { path: 'examples', component: TableExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule {}
