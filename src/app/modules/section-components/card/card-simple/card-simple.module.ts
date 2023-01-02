import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardSimpleRoutingModule } from './card-simple-routing.module';
import { CardSimpleComponent } from './card-simple.component';
import { CardSimpleOverviewComponent } from './pages/card-simple-overview/card-simple-overview.component';
import { CardSimpleApiComponent } from './pages/card-simple-api/card-simple-api.component';
import { CardSimpleExamplesComponent } from './pages/card-simple-examples/card-simple-examples.component';
import { OCardModule } from '@alan199912/library-test/card';
import { ONavModule } from '@alan199912/library-test/nav';
import { OTableComponent } from '@alan199912/library-test/table';
import { BestPracticesComponent } from 'src/app/components/best-practices/best-practices.component';
import { BadPracticesComponent } from 'src/app/components/bad-practices/bad-practices.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';

@NgModule({
  declarations: [CardSimpleComponent, CardSimpleOverviewComponent, CardSimpleApiComponent, CardSimpleExamplesComponent],
  imports: [
    CommonModule,
    CardSimpleRoutingModule,
    ONavModule,
    BestPracticesComponent,
    BadPracticesComponent,
    OTableComponent,
    ViewerComponent,
    ClipboardDirective,
    OCardModule,
    PrismDirective
  ]
})
export class CardSimpleModule {}
