import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardNoticeOverviewComponent } from './pages/card-notice-overview/card-notice-overview.component';
import { CardNoticeApiComponent } from './pages/card-notice-api/card-notice-api.component';
import { CardNoticeExamplesComponent } from './pages/card-notice-examples/card-notice-examples.component';

const routes: Routes = [
  { path: 'overview', component: CardNoticeOverviewComponent },
  { path: 'api', component: CardNoticeApiComponent },
  { path: 'examples', component: CardNoticeExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardNoticeRoutingModule {}
