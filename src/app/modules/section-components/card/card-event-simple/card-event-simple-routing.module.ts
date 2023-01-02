import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardEventSimpleOverviewComponent } from './pages/card-event-simple-overview/card-event-simple-overview.component';
import { CardEventSimpleApiComponent } from './pages/card-event-simple-api/card-event-simple-api.component';
import { CardEventSimpleExamplesComponent } from './pages/card-event-simple-examples/card-event-simple-examples.component';

const routes: Routes = [
  { path: 'overview', component: CardEventSimpleOverviewComponent },
  { path: 'api', component: CardEventSimpleApiComponent },
  { path: 'examples', component: CardEventSimpleExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardEventSimpleRoutingModule {}
