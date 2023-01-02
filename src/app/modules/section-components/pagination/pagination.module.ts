import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationRoutingModule } from './pagination-routing.module';
import { PaginationComponent } from './pagination.component';
import { PaginationApiComponent } from './pages/pagination-api/pagination-api.component';
import { PaginationOverviewComponent } from './pages/pagination-overview/pagination-overview.component';
import { PaginationExamplesComponent } from './pages/pagination-examples/pagination-examples.component';
import { OPaginationModule } from '@alan199912/library-test/pagination';
import { ONavModule } from '@alan199912/library-test/nav';
import { OTableComponent } from '@alan199912/library-test/table';
import { BestPracticesComponent } from 'src/app/components/best-practices/best-practices.component';
import { BadPracticesComponent } from 'src/app/components/bad-practices/bad-practices.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';

@NgModule({
  declarations: [PaginationComponent, PaginationApiComponent, PaginationOverviewComponent, PaginationExamplesComponent],
  imports: [
    CommonModule,
    PaginationRoutingModule,
    ONavModule,
    BestPracticesComponent,
    BadPracticesComponent,
    OTableComponent,
    ViewerComponent,
    OPaginationModule,
    ClipboardDirective,
    PrismDirective
  ]
})
export class PaginationModule {}
