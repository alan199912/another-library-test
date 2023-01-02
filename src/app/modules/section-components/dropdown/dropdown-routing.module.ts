import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownApiComponent } from './pages/dropdown-api/dropdown-api.component';
import { DropdownExamplesComponent } from './pages/dropdown-examples/dropdown-examples.component';
import { DropdownOverviewComponent } from './pages/dropdown-overview/dropdown-overview.component';

const routes: Routes = [
  { path: 'overview', component: DropdownOverviewComponent },
  { path: 'api', component: DropdownApiComponent },
  { path: 'examples', component: DropdownExamplesComponent },
  { path: '**', redirectTo: 'overview', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropdownRoutingModule {}
