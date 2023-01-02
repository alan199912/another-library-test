import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusBarApiComponent } from './pages/status-bar-api/status-bar-api.component';
import { StatusBarExampleComponent } from './pages/status-bar-example/status-bar-example.component';

const routes: Routes = [
  { path: 'api', component: StatusBarApiComponent },
  { path: 'examples', component: StatusBarExampleComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'api' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusBarRoutingModule {}
