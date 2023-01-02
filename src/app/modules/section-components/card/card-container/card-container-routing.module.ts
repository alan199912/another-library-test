import { CardContainerOverviewComponent } from './pages/card-container-overview/card-container-overview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardContainerApiComponent } from './pages/card-container-api/card-container-api.component';
import { CardContainerExamplesComponent } from './pages/card-container-examples/card-container-examples.component';

const routes: Routes = [
  { path: 'overview', component: CardContainerOverviewComponent },
  { path: 'api', component: CardContainerApiComponent },
  { path: 'examples', component: CardContainerExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardContainerRoutingModule {}
