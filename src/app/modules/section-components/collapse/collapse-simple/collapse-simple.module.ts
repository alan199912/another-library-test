import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseSimpleRoutingModule } from './collapse-simple-routing.module';
import { OCollapseModule } from '@alan199912/library-test/collapse';
import { ONavModule } from '@alan199912/library-test/nav';
import { OTableComponent } from '@alan199912/library-test/table';

import { CollapseSimpleOverviewComponent } from './pages/collapse-simple-overview/collapse-simple-overview.component';
import { CollapseSimpleApiComponent } from './pages/collapse-simple-api/collapse-simple-api.component';
import { CollapseSimpleComponent } from './collapse-simple.component';
import { CollapseSimpleExamplesComponent } from './pages/collapse-simple-examples/collapse-simple-examples.component';
import { BestPracticesComponent } from 'src/app/components/best-practices/best-practices.component';
import { BadPracticesComponent } from 'src/app/components/bad-practices/bad-practices.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';

@NgModule({
  declarations: [
    CollapseSimpleComponent,
    CollapseSimpleOverviewComponent,
    CollapseSimpleApiComponent,
    CollapseSimpleExamplesComponent
  ],
  imports: [
    CommonModule,
    CollapseSimpleRoutingModule,
    ONavModule,
    BestPracticesComponent,
    BadPracticesComponent,
    OTableComponent,
    OCollapseModule,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective
  ]
})
export class CollapseSimpleModule {}
