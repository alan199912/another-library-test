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

import { AccessGroupRoutingModule } from './access-group-routing.module';
import { AccessGroupComponent } from './access-group.component';
import { AccessGroupApiComponent } from './pages/access-group-api/access-group-api.component';
import { AccessGroupExampleComponent } from './pages/access-group-example/access-group-example.component';

@NgModule({
  declarations: [AccessGroupComponent, AccessGroupApiComponent, AccessGroupExampleComponent],
  imports: [
    CommonModule,
    AccessGroupRoutingModule,
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
export class AccessGroupModule {}
