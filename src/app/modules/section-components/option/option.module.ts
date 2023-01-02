import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OOptionComponent } from '@alan199912/library-test/option';
import { ONavModule } from '@alan199912/library-test/nav';
import { OTableComponent } from '@alan199912/library-test/table';
import { BadPracticesComponent } from 'src/app/components/bad-practices/bad-practices.component';
import { BestPracticesComponent } from 'src/app/components/best-practices/best-practices.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';

import { OptionRoutingModule } from './option-routing.module';
import { OptionComponent } from './option.component';
import { OptionApiComponent } from './pages/option-api/option-api.component';
import { OptionExamplesComponent } from './pages/option-examples/option-examples.component';
import { OptionOverviewComponent } from './pages/option-overview/option-overview.component';

@NgModule({
  declarations: [OptionComponent, OptionApiComponent, OptionOverviewComponent, OptionExamplesComponent],
  imports: [
    CommonModule,
    OptionRoutingModule,
    ONavModule,
    OTableComponent,
    OOptionComponent,
    ViewerComponent,
    ClipboardDirective,
    BestPracticesComponent,
    BadPracticesComponent,
    PrismDirective
  ]
})
export class OptionModule {}
