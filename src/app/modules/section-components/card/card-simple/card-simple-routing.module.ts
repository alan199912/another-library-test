import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardSimpleApiComponent } from './pages/card-simple-api/card-simple-api.component';
import { CardSimpleExamplesComponent } from './pages/card-simple-examples/card-simple-examples.component';
import { CardSimpleOverviewComponent } from './pages/card-simple-overview/card-simple-overview.component';

const routes: Routes = [
  { path: 'overview', component: CardSimpleOverviewComponent },
  { path: 'api', component: CardSimpleApiComponent },
  { path: 'examples', component: CardSimpleExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardSimpleRoutingModule {}
