import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardNoticeRoutingModule } from './card-notice-routing.module';
import { CardNoticeComponent } from './card-notice.component';
import { CardNoticeOverviewComponent } from './pages/card-notice-overview/card-notice-overview.component';
import { CardNoticeApiComponent } from './pages/card-notice-api/card-notice-api.component';
import { CardNoticeExamplesComponent } from './pages/card-notice-examples/card-notice-examples.component';
import { OCardModule } from '@alan199912/library-test/card';
import { ONavModule } from '@alan199912/library-test/nav';
import { OTableComponent } from '@alan199912/library-test/table';
import { BestPracticesComponent } from 'src/app/components/best-practices/best-practices.component';
import { BadPracticesComponent } from 'src/app/components/bad-practices/bad-practices.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';

@NgModule({
  declarations: [CardNoticeComponent, CardNoticeOverviewComponent, CardNoticeApiComponent, CardNoticeExamplesComponent],
  imports: [
    CommonModule,
    CardNoticeRoutingModule,
    ONavModule,
    BestPracticesComponent,
    BadPracticesComponent,
    OTableComponent,
    ViewerComponent,
    OCardModule,
    ClipboardDirective,
    PrismDirective
  ]
})
export class CardNoticeModule {}
