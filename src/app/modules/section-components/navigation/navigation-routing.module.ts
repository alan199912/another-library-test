import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationHorizontalComponent } from './navigation-horizontal/navigation-horizontal.component';
import { NavigationVerticalComponent } from './navigation-vertical/navigation-vertical.component';

const routes: Routes = [
  {
    path: 'navigation-horizontal',
    component: NavigationHorizontalComponent,
    loadChildren: () =>
      import('./navigation-horizontal/navigation-horizontal.module').then((m) => m.NavigationHorizontalModule)
  },
  {
    path: 'navigation-vertical',
    component: NavigationVerticalComponent,
    loadChildren: () =>
      import('./navigation-vertical/navigation-vertical.module').then((m) => m.NavigationVerticalModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'navigation-horizontal' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule {}
