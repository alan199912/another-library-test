import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownRoutingModule } from './dropdown-routing.module';
import { DropdownComponent } from './dropdown.component';
import { ONavModule } from '@alan199912/library-test/nav';
import { BestPracticesComponent } from 'src/app/components/best-practices/best-practices.component';
import { BadPracticesComponent } from 'src/app/components/bad-practices/bad-practices.component';
import { OTableComponent } from '@alan199912/library-test/table';
import { ODropdownComponent } from '@alan199912/library-test/dropdown';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { DropdownApiComponent } from './pages/dropdown-api/dropdown-api.component';
import { DropdownOverviewComponent } from './pages/dropdown-overview/dropdown-overview.component';
import { DropdownExamplesComponent } from './pages/dropdown-examples/dropdown-examples.component';

@NgModule({
  declarations: [DropdownComponent, DropdownOverviewComponent, DropdownApiComponent, DropdownExamplesComponent],
  imports: [
    CommonModule,
    DropdownRoutingModule,
    ONavModule,
    BestPracticesComponent,
    BadPracticesComponent,
    OTableComponent,
    ODropdownComponent,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective
  ]
})
export class DropdownModule {}
