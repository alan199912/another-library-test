import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OModalComponent } from '@alan199912/library-test/modal';
import { ONavModule } from '@alan199912/library-test/nav';
import { OTableComponent } from '@alan199912/library-test/table';
import { BadPracticesComponent } from 'src/app/components/bad-practices/bad-practices.component';
import { BestPracticesComponent } from 'src/app/components/best-practices/best-practices.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { ModalRoutingModule } from './modal-routing.module';
import { ModalComponent } from './modal.component';
import { ModalApiComponent } from './pages/modal-api/modal-api.component';
import { ModalExamplesComponent } from './pages/modal-examples/modal-examples.component';
import { ModalOverviewComponent } from './pages/modal-overview/modal-overview.component';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';

@NgModule({
  declarations: [ModalComponent, ModalOverviewComponent, ModalApiComponent, ModalExamplesComponent],
  imports: [
    CommonModule,
    ModalRoutingModule,
    ONavModule,
    BestPracticesComponent,
    BadPracticesComponent,
    OTableComponent,
    ViewerComponent,
    OModalComponent,
    ClipboardDirective,
    PrismDirective
  ]
})
export class ModalModule {}
