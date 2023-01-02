import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessGroupComponent } from './access-group/access-group.component';
import { AccessListComponent } from './access-list/access-list.component';
import { AccessSimpleComponent } from './access-simple/access-simple.component';

const routes: Routes = [
  {
    path: 'access-simple',
    component: AccessSimpleComponent,
    loadChildren: () => import('./access-simple/access-simple.module').then((m) => m.AccessSimpleModule)
  },
  {
    path: 'access-group',
    component: AccessGroupComponent,
    loadChildren: () => import('./access-group/access-group.module').then((m) => m.AccessGroupModule)
  },
  {
    path: 'access-list',
    component: AccessListComponent,
    loadChildren: () => import('./access-list/access-list.module').then((m) => m.AccessListModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'access-simple' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessRoutingModule {}
