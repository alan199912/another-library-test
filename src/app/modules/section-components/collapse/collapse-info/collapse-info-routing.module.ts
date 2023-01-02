import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollapseInfoApiComponent } from './pages/collapse-info-api/collapse-info-api.component';
import { CollapseInfoExamplesComponent } from './pages/collapse-info-examples/collapse-info-examples.component';
import { CollapseInfoOverviewComponent } from './pages/collapse-info-overview/collapse-info-overview.component';

const routes: Routes = [
  { path: 'overview', component: CollapseInfoOverviewComponent },
  { path: 'api', component: CollapseInfoApiComponent },
  { path: 'examples', component: CollapseInfoExamplesComponent },
  { path: '**', redirectTo: 'overview', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollapseInfoRoutingModule {}
