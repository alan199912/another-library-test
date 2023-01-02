import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ONavModule } from '@alan199912/library-test/nav';
import { OTableComponent } from '@alan199912/library-test/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { TableApiComponent } from './pages/table-api/table-api.component';
import { TableExamplesComponent } from './pages/table-examples/table-examples.component';
import { TableOverviewComponent } from './pages/table-overview/table-overview.component';
import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent, TableOverviewComponent, TableApiComponent, TableExamplesComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    ONavModule,
    OTableComponent,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective
  ]
})
export class TableModule {}
