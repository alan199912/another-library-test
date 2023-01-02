import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OProgressBarComponent } from '@alan199912/library-test/progress-bar';
import { ONavModule } from '@alan199912/library-test/nav';
import { OTableComponent } from '@alan199912/library-test/table';
import { BadPracticesComponent } from 'src/app/components/bad-practices/bad-practices.component';
import { BestPracticesComponent } from 'src/app/components/best-practices/best-practices.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';

import { ProgressBarApiComponent } from './pages/progress-bar-api/progress-bar-api.component';
import { ProgressBarDemoComponent } from './pages/progress-bar-examples/demo/progress-bar-demo.component';
import { ProgressBarExamplesComponent } from './pages/progress-bar-examples/progress-bar-examples.component';
import { ProgressBarOverviewComponent } from './pages/progress-bar-overview/progress-bar-overview.component';
import { ProgressBarRoutingModule } from './progress-bar-routing.module';
import { ProgressBarComponent } from './progress-bar.component';

@NgModule({
  declarations: [
    ProgressBarComponent,
    ProgressBarApiComponent,
    ProgressBarExamplesComponent,
    ProgressBarOverviewComponent,
    ProgressBarDemoComponent
  ],
  imports: [
    CommonModule,
    ProgressBarRoutingModule,
    ONavModule,
    OTableComponent,
    OProgressBarComponent,
    ViewerComponent,
    BestPracticesComponent,
    BadPracticesComponent,
    PrismDirective,
    ClipboardDirective
  ]
})
export class ProgressBarModule {}
