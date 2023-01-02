import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardEventSimpleRoutingModule } from './card-event-simple-routing.module';
import { CardEventSimpleComponent } from './card-event-simple.component';
import { CardEventSimpleOverviewComponent } from './pages/card-event-simple-overview/card-event-simple-overview.component';
import { CardEventSimpleApiComponent } from './pages/card-event-simple-api/card-event-simple-api.component';
import { CardEventSimpleExamplesComponent } from './pages/card-event-simple-examples/card-event-simple-examples.component';
import { OCardModule } from '@alan199912/library-test/card';
import { ONavModule } from '@alan199912/library-test/nav';
import { OTableComponent } from '@alan199912/library-test/table';
import { BestPracticesComponent } from 'src/app/components/best-practices/best-practices.component';
import { BadPracticesComponent } from 'src/app/components/bad-practices/bad-practices.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';

@NgModule({
  declarations: [
    CardEventSimpleComponent,
    CardEventSimpleOverviewComponent,
    CardEventSimpleApiComponent,
    CardEventSimpleExamplesComponent
  ],
  imports: [
    CommonModule,
    CardEventSimpleRoutingModule,
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
export class CardEventSimpleModule {}
