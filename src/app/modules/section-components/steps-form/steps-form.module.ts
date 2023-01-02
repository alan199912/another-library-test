import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepsFormRoutingModule } from './steps-form-routing.module';
import { StepsFormComponent } from './steps-form.component';
import { StepsFormOverviewComponent } from './pages/steps-form-overview/steps-form-overview.component';
import { StepsFormApiComponent } from './pages/steps-form-api/steps-form-api.component';
import { StepsFormExamplesComponent } from './pages/steps-form-examples/steps-form-examples.component';
import { OStepsFormComponent } from '@alan199912/library-test/steps-form';
import { ONavModule } from '@alan199912/library-test/nav';
import { OTableComponent } from '@alan199912/library-test/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { BestPracticesComponent } from 'src/app/components/best-practices/best-practices.component';
import { BadPracticesComponent } from 'src/app/components/bad-practices/bad-practices.component';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';

@NgModule({
  declarations: [StepsFormComponent, StepsFormOverviewComponent, StepsFormApiComponent, StepsFormExamplesComponent],
  imports: [
    CommonModule,
    StepsFormRoutingModule,
    ONavModule,
    OTableComponent,
    OStepsFormComponent,
    ViewerComponent,
    BestPracticesComponent,
    BadPracticesComponent,
    PrismDirective,
    ClipboardDirective,
    OStepsFormComponent
  ]
})
export class StepsFormModule {}
