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

import { PanelLargeFeaturedApiComponent } from './pages/panel-large-featured-api/panel-large-featured-api.component';
import { PanelLargeFeaturedExamplesComponent } from './pages/panel-large-featured-examples/panel-large-featured-examples.component';
import { PanelLargeFeaturedRoutingModule } from './panel-large-featured-routing.module';
import { PanelLargeFeaturedComponent } from './panel-large-featured.component';

@NgModule({
  declarations: [PanelLargeFeaturedComponent, PanelLargeFeaturedApiComponent, PanelLargeFeaturedExamplesComponent],
  imports: [
    CommonModule,
    PanelLargeFeaturedRoutingModule,
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
export class PanelLargeFeaturedModule {}
