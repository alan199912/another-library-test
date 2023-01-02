import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccessComponent } from './access/access.component';
import { AlertComponent } from './alert/alert.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CardComponent } from './card/card.component';
import { CollapseComponent } from './collapse/collapse.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PanelComponent } from './panel/panel.component';
import { LinkListComponent } from './link-list/link-list.component';
import { ModalComponent } from './modal/modal.component';
import { OptionComponent } from './option/option.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { TableComponent } from './table/table.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StepsFormComponent } from './steps-form/steps-form.component';
import { DropdownComponent } from './dropdown/dropdown.component';

const routes: Routes = [
  {
    path: 'access',
    component: AccessComponent,
    loadChildren: () => import('./access/access.module').then((m) => m.AccessModule)
  },
  {
    path: 'alert',
    component: AlertComponent,
    loadChildren: () => import('./alert/alert.module').then((m) => m.AlertModule)
  },
  {
    path: 'card',
    component: CardComponent,
    loadChildren: () => import('./card/card.module').then((m) => m.CardModule)
  },
  {
    path: 'breadcrumb',
    component: BreadcrumbComponent,
    loadChildren: () => import('./breadcrumb/breadcrumb.module').then((m) => m.BreadcrumbModule)
  },
  {
    path: 'footer',
    component: FooterComponent,
    loadChildren: () => import('./footer/footer.module').then((m) => m.FooterModule)
  },
  {
    path: 'progress-bar',
    component: ProgressBarComponent,
    loadChildren: () => import('./progress-bar/progress-bar.module').then((m) => m.ProgressBarModule)
  },
  {
    path: 'status-bar',
    component: StatusBarComponent,
    loadChildren: () => import('./status-bar/status-bar.module').then((m) => m.StatusBarModule)
  },
  {
    path: 'collapse',
    component: CollapseComponent,
    loadChildren: () => import('./collapse/collapse.module').then((m) => m.CollapseModule)
  },
  {
    path: 'modal',
    component: ModalComponent,
    loadChildren: () => import('./modal/modal.module').then((m) => m.ModalModule)
  },
  {
    path: 'pagination',
    component: PaginationComponent,
    loadChildren: () => import('./pagination/pagination.module').then((m) => m.PaginationModule)
  },
  {
    path: 'table',
    component: TableComponent,
    loadChildren: () => import('./table/table.module').then((m) => m.TableModule)
  },
  {
    path: 'option',
    component: OptionComponent,
    loadChildren: () => import('./option/option.module').then((m) => m.OptionModule)
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    loadChildren: () => import('./gallery/gallery.module').then((m) => m.GalleryModule)
  },
  {
    path: 'navigation',
    component: NavigationComponent,
    loadChildren: () => import('./navigation/navigation.module').then((m) => m.NavigationModule)
  },
  {
    path: 'panel',
    component: PanelComponent,
    loadChildren: () => import('./panel/panel.module').then((m) => m.PanelModule)
  },
  {
    path: 'link-list',
    component: LinkListComponent,
    loadChildren: () => import('./link-list/link-list.module').then((m) => m.LinkListModule)
  },
  {
    path: 'steps-form',
    component: StepsFormComponent,
    loadChildren: () => import('./steps-form/steps-form.module').then((m) => m.StepsFormModule)
  },
  {
    path: 'dropdown',
    component: DropdownComponent,
    loadChildren: () => import('./dropdown/dropdown.module').then((m) => m.DropdownModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionComponentsRoutingModule {}
