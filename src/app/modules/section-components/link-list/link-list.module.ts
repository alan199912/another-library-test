import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OLinkListComponent } from '@alan199912/library-test/link-list';
import { ONavModule } from '@alan199912/library-test/nav';
import { OTableComponent } from '@alan199912/library-test/table';
import { BadPracticesComponent } from 'src/app/components/bad-practices/bad-practices.component';
import { BestPracticesComponent } from 'src/app/components/best-practices/best-practices.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';

import { LinkListRoutingModule } from './link-list-routing.module';
import { LinkListComponent } from './link-list.component';
import { LinkListApiComponent } from './pages/link-list-api/link-list-api.component';
import { LinkListExamplesComponent } from './pages/link-list-examples/link-list-examples.component';

@NgModule({
  declarations: [LinkListComponent, LinkListApiComponent, LinkListExamplesComponent],
  imports: [
    CommonModule,
    LinkListRoutingModule,
    ONavModule,
    OTableComponent,
    OLinkListComponent,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective,
    BestPracticesComponent,
    BadPracticesComponent
  ]
})
export class LinkListModule {}
