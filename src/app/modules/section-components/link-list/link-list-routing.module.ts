import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkListApiComponent } from './pages/link-list-api/link-list-api.component';
import { LinkListExamplesComponent } from './pages/link-list-examples/link-list-examples.component';

const routes: Routes = [
  { path: 'api', component: LinkListApiComponent },
  { path: 'examples', component: LinkListExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkListRoutingModule {}
