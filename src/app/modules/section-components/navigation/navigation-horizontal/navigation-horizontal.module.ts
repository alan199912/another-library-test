import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationHorizontalRoutingModule } from './navigation-horizontal-routing.module';
import { NavigationHorizontalComponent } from './navigation-horizontal.component';
import { NavigationHorizontalOverviewComponent } from './pages/navigation-horizontal-overview/navigation-horizontal-overview.component';
import { NavigationHorizontalApiComponent } from './pages/navigation-horizontal-api/navigation-horizontal-api.component';
import { NavigationHorizontalExamplesComponent } from './pages/navigation-horizontal-examples/navigation-horizontal-examples.component';
import { ONavModule } from '@alan199912/library-test/nav';
import { OTableComponent } from '@alan199912/library-test/table';
import { BestPracticesComponent } from 'src/app/components/best-practices/best-practices.component';
import { BadPracticesComponent } from 'src/app/components/bad-practices/bad-practices.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';

@NgModule({
  declarations: [
    NavigationHorizontalComponent,
    NavigationHorizontalOverviewComponent,
    NavigationHorizontalApiComponent,
    NavigationHorizontalExamplesComponent
  ],
  imports: [
    CommonModule,
    NavigationHorizontalRoutingModule,
    ONavModule,
    BestPracticesComponent,
    BadPracticesComponent,
    OTableComponent,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective
  ]
})
export class NavigationHorizontalModule {}
