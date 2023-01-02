import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelInformationComponent } from './panel-information/panel-information.component';
import { PanelLargeFeaturedComponent } from './panel-large-featured/panel-large-featured.component';
import { PanelSmallFeaturedComponent } from './panel-small-featured/panel-small-featured.component';

const routes: Routes = [
  {
    path: 'panel-information',
    component: PanelInformationComponent,
    loadChildren: () => import('./panel-information/panel-information.module').then((m) => m.PanelInformationModule)
  },
  {
    path: 'panel-large-featured',
    component: PanelLargeFeaturedComponent,
    loadChildren: () =>
      import('./panel-large-featured/panel-large-featured.module').then((m) => m.PanelLargeFeaturedModule)
  },
  {
    path: 'panel-small-featured',
    component: PanelSmallFeaturedComponent,
    loadChildren: () =>
      import('./panel-small-featured/panel-small-featured.module').then((m) => m.PanelSmallFeaturedModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'panel-information' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule {}
