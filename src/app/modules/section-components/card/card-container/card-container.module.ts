import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardContainerRoutingModule } from './card-container-routing.module';
import { CardContainerOverviewComponent } from './pages/card-container-overview/card-container-overview.component';
import { CardContainerApiComponent } from './pages/card-container-api/card-container-api.component';
import { CardContainerExamplesComponent } from './pages/card-container-examples/card-container-examples.component';
import { CardContainerComponent } from './card-container.component';
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
    CardContainerOverviewComponent,
    CardContainerApiComponent,
    CardContainerExamplesComponent,
    CardContainerComponent
  ],
  imports: [
    CommonModule,
    CardContainerRoutingModule,
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
export class CardContainerModule {}
