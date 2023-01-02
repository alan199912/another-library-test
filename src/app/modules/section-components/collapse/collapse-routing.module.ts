import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollapseInfoComponent } from './collapse-info/collapse-info.component';
import { CollapseSimpleComponent } from './collapse-simple/collapse-simple.component';

const routes: Routes = [
  {
    path: 'collapse-simple',
    component: CollapseSimpleComponent,
    loadChildren: () => import('./collapse-simple/collapse-simple.module').then((m) => m.CollapseSimpleModule)
  },
  {
    path: 'collapse-info',
    component: CollapseInfoComponent,
    loadChildren: () => import('./collapse-info/collapse-info.module').then((m) => m.CollapseInfoModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'collapse-simple' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollapseRoutingModule {}
