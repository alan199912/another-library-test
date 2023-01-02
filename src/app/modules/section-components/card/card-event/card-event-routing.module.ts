import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardEventApiComponent } from './pages/card-event-api/card-event-api.component';
import { CardEventExamplesComponent } from './pages/card-event-examples/card-event-examples.component';
import { CardEventOverviewComponent } from './pages/card-event-overview/card-event-overview.component';

const routes: Routes = [
  { path: 'overview', component: CardEventOverviewComponent },
  { path: 'api', component: CardEventApiComponent },
  { path: 'examples', component: CardEventExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardEventRoutingModule {}
