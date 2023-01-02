import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DefaultImageDirective } from '@alan199912/library-test/directives';
import { OInformationPanelComponent } from './o-information-panel/o-information-panel.component';
import { OLargeFeaturedPanelComponent } from './o-large-featured-panel/o-large-featured-panel.component';
import { OSmallFeaturedPanelComponent } from './o-small-featured-panel/o-small-featured-panel.component';

@NgModule({
  declarations: [OInformationPanelComponent, OLargeFeaturedPanelComponent, OSmallFeaturedPanelComponent],
  imports: [CommonModule, DefaultImageDirective],
  exports: [OInformationPanelComponent, OLargeFeaturedPanelComponent, OSmallFeaturedPanelComponent]
})
export class OPanelModule {}
