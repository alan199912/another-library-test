import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessGroupApiComponent } from './pages/access-group-api/access-group-api.component';
import { AccessGroupExampleComponent } from './pages/access-group-example/access-group-example.component';

const routes: Routes = [
  { path: 'api', component: AccessGroupApiComponent },
  { path: 'examples', component: AccessGroupExampleComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessGroupRoutingModule {}
