import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelSmallFeaturedApiComponent } from './pages/panel-small-featured-api/panel-small-featured-api.component';
import { PanelSmallFeaturedExamplesComponent } from './pages/panel-small-featured-examples/panel-small-featured-examples.component';

const routes: Routes = [
  { path: 'api', component: PanelSmallFeaturedApiComponent },
  { path: 'examples', component: PanelSmallFeaturedExamplesComponent },
  { path: '**', redirectTo: 'api', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelSmallFeaturedRoutingModule {}
