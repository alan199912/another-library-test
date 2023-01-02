import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterApiComponent } from './pages/footer-api/footer-api.component';
import { FooterExamplesComponent } from './pages/footer-examples/footer-examples.component';
import { FooterOverviewComponent } from './pages/footer-overview/footer-overview.component';

const routes: Routes = [
  { path: 'overview', component: FooterOverviewComponent },
  { path: 'api', component: FooterApiComponent },
  { path: 'examples', component: FooterExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterRoutingModule {}
