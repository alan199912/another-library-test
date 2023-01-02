import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardSimpleHorizontalApiComponent } from './pages/card-simple-horizontal-api/card-simple-horizontal-api.component';
import { CardSimpleHorizontalExamplesComponent } from './pages/card-simple-horizontal-examples/card-simple-horizontal-examples.component';
import { CardSimpleHorizontalOverviewComponent } from './pages/card-simple-horizontal-overview/card-simple-horizontal-overview.component';

const routes: Routes = [
  { path: 'overview', component: CardSimpleHorizontalOverviewComponent },
  { path: 'api', component: CardSimpleHorizontalApiComponent },
  { path: 'examples', component: CardSimpleHorizontalExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardSimpleHorizontalRoutingModule {}
