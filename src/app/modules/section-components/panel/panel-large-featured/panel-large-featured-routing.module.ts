import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelLargeFeaturedApiComponent } from './pages/panel-large-featured-api/panel-large-featured-api.component';
import { PanelLargeFeaturedExamplesComponent } from './pages/panel-large-featured-examples/panel-large-featured-examples.component';

const routes: Routes = [
  { path: 'api', component: PanelLargeFeaturedApiComponent },
  { path: 'examples', component: PanelLargeFeaturedExamplesComponent },
  { path: '**', redirectTo: 'api', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelLargeFeaturedRoutingModule {}
