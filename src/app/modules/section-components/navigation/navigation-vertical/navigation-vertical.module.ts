import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationVerticalRoutingModule } from './navigation-vertical-routing.module';
import { NavigationVerticalComponent } from './navigation-vertical.component';
import { NavigationVerticalOverviewComponent } from './pages/navigation-vertical-overview/navigation-vertical-overview.component';
import { NavigationVerticalApiComponent } from './pages/navigation-vertical-api/navigation-vertical-api.component';
import { NavigationVerticalExamplesComponent } from './pages/navigation-vertical-examples/navigation-vertical-examples.component';
import { ONavModule } from '@alan199912/library-test/nav';
import { OTableComponent } from '@alan199912/library-test/table';
import { BestPracticesComponent } from 'src/app/components/best-practices/best-practices.component';
import { BadPracticesComponent } from 'src/app/components/bad-practices/bad-practices.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';

@NgModule({
  declarations: [
    NavigationVerticalComponent,
    NavigationVerticalOverviewComponent,
    NavigationVerticalApiComponent,
    NavigationVerticalExamplesComponent
  ],
  imports: [
    CommonModule,
    NavigationVerticalRoutingModule,
    ONavModule,
    BestPracticesComponent,
    BadPracticesComponent,
    OTableComponent,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective
  ]
})
export class NavigationVerticalModule {}
