import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardEventRoutingModule } from './card-event-routing.module';
import { CardEventComponent } from './card-event.component';
import { CardEventOverviewComponent } from './pages/card-event-overview/card-event-overview.component';
import { CardEventApiComponent } from './pages/card-event-api/card-event-api.component';
import { CardEventExamplesComponent } from './pages/card-event-examples/card-event-examples.component';
import { OCardModule } from '@alan199912/library-test/card';
import { ONavModule } from '@alan199912/library-test/nav';
import { OTableComponent } from '@alan199912/library-test/table';
import { BestPracticesComponent } from 'src/app/components/best-practices/best-practices.component';
import { BadPracticesComponent } from 'src/app/components/bad-practices/bad-practices.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';

@NgModule({
  declarations: [CardEventComponent, CardEventOverviewComponent, CardEventApiComponent, CardEventExamplesComponent],
  imports: [
    CommonModule,
    CardEventRoutingModule,
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
export class CardEventModule {}
