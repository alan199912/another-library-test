import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OAccessModule } from '@alan199912/library-test/access';
import { ONavModule } from '@alan199912/library-test/nav';
import { OTableComponent } from '@alan199912/library-test/table';
import { BadPracticesComponent } from 'src/app/components/bad-practices/bad-practices.component';
import { BestPracticesComponent } from 'src/app/components/best-practices/best-practices.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';

import { AccessSimpleRoutingModule } from './access-simple-routing.module';
import { AccessSimpleComponent } from './access-simple.component';
import { AccessSimpleApiComponent } from './page/access-simple-api/access-simple-api.component';
import { AccessSimpleExampleComponent } from './page/access-simple-example/access-simple-example.component';

@NgModule({
  declarations: [AccessSimpleComponent, AccessSimpleApiComponent, AccessSimpleExampleComponent],
  imports: [
    CommonModule,
    AccessSimpleRoutingModule,
    ONavModule,
    BestPracticesComponent,
    BadPracticesComponent,
    OTableComponent,
    PrismDirective,
    ClipboardDirective,
    ViewerComponent,
    OAccessModule
  ]
})
export class AccessSimpleModule {}
