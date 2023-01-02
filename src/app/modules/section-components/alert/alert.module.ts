import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OAlertDirective } from '@alan199912/library-test/alert';
import { ONavModule } from '@alan199912/library-test/nav';
import { OTableComponent } from '@alan199912/library-test/table';
import { AlertRoutingModule } from './alert-routing.module';

import { BadPracticesComponent } from 'src/app/components/bad-practices/bad-practices.component';
import { BestPracticesComponent } from 'src/app/components/best-practices/best-practices.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { AlertComponent } from './alert.component';
import { AlertApiComponent } from './pages/alert-api/alert-api.component';
import { AlertExamplesComponent } from './pages/alert-examples/alert-examples.component';
import { AlertOverviewComponent } from './pages/alert-overview/alert-overview.component';

@NgModule({
  declarations: [AlertComponent, AlertOverviewComponent, AlertApiComponent, AlertExamplesComponent],
  imports: [
    CommonModule,
    AlertRoutingModule,
    ONavModule,
    OTableComponent,
    ViewerComponent,
    ClipboardDirective,
    BestPracticesComponent,
    BadPracticesComponent,
    PrismDirective,
    OAlertDirective
  ]
})
export class AlertModule {}
