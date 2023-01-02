import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardContainerHorizontalRoutingModule } from './card-container-horizontal-routing.module';
import { CardContainerHorizontalOverviewComponent } from './pages/card-container-horizontal-overview/card-container-horizontal-overview.component';
import { CardContainerHorizontalApiComponent } from './pages/card-container-horizontal-api/card-container-horizontal-api.component';
import { CardContainerHorizontalExamplesComponent } from './pages/card-container-horizontal-examples/card-container-horizontal-examples.component';
import { CardContainerHorizontalComponent } from './card-container-horizontal.component';
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
    CardContainerHorizontalOverviewComponent,
    CardContainerHorizontalApiComponent,
    CardContainerHorizontalExamplesComponent,
    CardContainerHorizontalComponent
  ],
  imports: [
    CommonModule,
    CardContainerHorizontalRoutingModule,
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
export class CardContainerHorizontalModule {}
