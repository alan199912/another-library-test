import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OPanelModule } from '@alan199912/library-test/panel';
import { ONavModule } from '@alan199912/library-test/nav';
import { OTableComponent } from '@alan199912/library-test/table';
import { BadPracticesComponent } from 'src/app/components/bad-practices/bad-practices.component';
import { BestPracticesComponent } from 'src/app/components/best-practices/best-practices.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';

import { PanelInformationApiComponent } from './pages/panel-information-api/panel-information-api.component';
import { PanelInformationExamplesComponent } from './pages/panel-information-examples/panel-information-examples.component';
import { PanelInformationRoutingModule } from './panel-information-routing.module';
import { PanelInformationComponent } from './panel-information.component';

@NgModule({
  declarations: [PanelInformationComponent, PanelInformationApiComponent, PanelInformationExamplesComponent],
  imports: [
    CommonModule,
    PanelInformationRoutingModule,
    ONavModule,
    OTableComponent,
    OPanelModule,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective,
    BestPracticesComponent,
    BadPracticesComponent
  ]
})
export class PanelInformationModule {}
