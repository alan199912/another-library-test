import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OAccessModule } from '@alan199912/library-test/access';
import { OAlertDirective } from '@alan199912/library-test/alert';
import { ONavModule } from '@alan199912/library-test/nav';
import { OTableComponent } from '@alan199912/library-test/table';
import { BadPracticesComponent } from 'src/app/components/bad-practices/bad-practices.component';
import { BestPracticesComponent } from 'src/app/components/best-practices/best-practices.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { AccessListRoutingModule } from './access-list-routing.module';
import { AccessListComponent } from './access-list.component';
import { AccessListApiComponent } from './pages/access-list-api/access-list-api.component';
import { AccessListExampleComponent } from './pages/access-list-example/access-list-example.component';

@NgModule({
  declarations: [AccessListComponent, AccessListApiComponent, AccessListExampleComponent],
  imports: [
    CommonModule,
    AccessListRoutingModule,
    ONavModule,
    BestPracticesComponent,
    BadPracticesComponent,
    OTableComponent,
    PrismDirective,
    ClipboardDirective,
    ViewerComponent,
    OAccessModule,
    OAlertDirective
  ]
})
export class AccessListModule {}
