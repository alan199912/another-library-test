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

import { PanelSmallFeaturedApiComponent } from './pages/panel-small-featured-api/panel-small-featured-api.component';
import { PanelSmallFeaturedExamplesComponent } from './pages/panel-small-featured-examples/panel-small-featured-examples.component';
import { PanelSmallFeaturedRoutingModule } from './panel-small-featured-routing.module';
import { PanelSmallFeaturedComponent } from './panel-small-featured.component';

@NgModule({
  declarations: [PanelSmallFeaturedComponent, PanelSmallFeaturedApiComponent, PanelSmallFeaturedExamplesComponent],
  imports: [
    CommonModule,
    PanelSmallFeaturedRoutingModule,
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
export class PanelSmallFeaturedModule {}
