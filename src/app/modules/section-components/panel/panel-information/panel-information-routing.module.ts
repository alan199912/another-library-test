import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelInformationApiComponent } from './pages/panel-information-api/panel-information-api.component';
import { PanelInformationExamplesComponent } from './pages/panel-information-examples/panel-information-examples.component';

const routes: Routes = [
  { path: 'api', component: PanelInformationApiComponent },
  { path: 'examples', component: PanelInformationExamplesComponent },
  { path: '**', redirectTo: 'api', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelInformationRoutingModule {}
