import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseInfoRoutingModule } from './collapse-info-routing.module';
import { OCollapseModule } from '@alan199912/library-test/collapse';
import { ONavModule } from '@alan199912/library-test/nav';
import { OTableComponent } from '@alan199912/library-test/table';

import { CollapseInfoComponent } from './collapse-info.component';
import { CollapseInfoOverviewComponent } from './pages/collapse-info-overview/collapse-info-overview.component';
import { CollapseInfoApiComponent } from './pages/collapse-info-api/collapse-info-api.component';
import { CollapseInfoExamplesComponent } from './pages/collapse-info-examples/collapse-info-examples.component';
import { BestPracticesComponent } from 'src/app/components/best-practices/best-practices.component';
import { BadPracticesComponent } from 'src/app/components/bad-practices/bad-practices.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';

@NgModule({
  declarations: [
    CollapseInfoComponent,
    CollapseInfoOverviewComponent,
    CollapseInfoApiComponent,
    CollapseInfoExamplesComponent
  ],
  imports: [
    CommonModule,
    CollapseInfoRoutingModule,
    ONavModule,
    BestPracticesComponent,
    BadPracticesComponent,
    OCollapseModule,
    OTableComponent,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective
  ]
})
export class CollapseInfoModule {}
