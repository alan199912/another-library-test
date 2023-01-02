import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardContainerHorizontalApiComponent } from './pages/card-container-horizontal-api/card-container-horizontal-api.component';
import { CardContainerHorizontalExamplesComponent } from './pages/card-container-horizontal-examples/card-container-horizontal-examples.component';
import { CardContainerHorizontalOverviewComponent } from './pages/card-container-horizontal-overview/card-container-horizontal-overview.component';

const routes: Routes = [
  { path: 'overview', component: CardContainerHorizontalOverviewComponent },
  { path: 'api', component: CardContainerHorizontalApiComponent },
  { path: 'examples', component: CardContainerHorizontalExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardContainerHorizontalRoutingModule {}
