import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionApiComponent } from './pages/option-api/option-api.component';
import { OptionExamplesComponent } from './pages/option-examples/option-examples.component';
import { OptionOverviewComponent } from './pages/option-overview/option-overview.component';

const routes: Routes = [
  { path: 'overview', component: OptionOverviewComponent },
  { path: 'api', component: OptionApiComponent },
  { path: 'examples', component: OptionExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionRoutingModule {}
