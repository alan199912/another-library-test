import { BestPracticesComponent } from './../../../components/best-practices/best-practices.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OBreadcrumbComponent } from '@alan199912/library-test/breadcrumb';
import { ONavModule } from '@alan199912/library-test/nav';
import { OTableComponent } from '@alan199912/library-test/table';

import { BreadcrumbRoutingModule } from './breadcrumb-routing.module';
import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbApiComponent } from './pages/breadcrumb-api/breadcrumb-api.component';
import { BreadcrumbExamplesComponent } from './pages/breadcrumb-examples/breadcrumb-examples.component';
import { BreadcrumbOverviewComponent } from './pages/breadcrumb-overview/breadcrumb-overview.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';

@NgModule({
  declarations: [BreadcrumbComponent, BreadcrumbApiComponent, BreadcrumbExamplesComponent, BreadcrumbOverviewComponent],
  imports: [
    CommonModule,
    BreadcrumbRoutingModule,
    ONavModule,
    BestPracticesComponent,
    ViewerComponent,
    OBreadcrumbComponent,
    ClipboardDirective,
    PrismDirective,
    OTableComponent
  ]
})
export class BreadcrumbModule {}
