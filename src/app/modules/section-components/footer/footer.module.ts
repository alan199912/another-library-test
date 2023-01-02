import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OFooterComponent } from '@alan199912/library-test/footer';
import { ONavModule } from '@alan199912/library-test/nav';
import { OTableComponent } from '@alan199912/library-test/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';
import { FooterApiComponent } from './pages/footer-api/footer-api.component';
import { FooterExamplesComponent } from './pages/footer-examples/footer-examples.component';
import { FooterOverviewComponent } from './pages/footer-overview/footer-overview.component';

@NgModule({
  declarations: [FooterComponent, FooterApiComponent, FooterExamplesComponent, FooterOverviewComponent],
  imports: [
    CommonModule,
    FooterRoutingModule,
    ONavModule,
    OTableComponent,
    OFooterComponent,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective
  ]
})
export class FooterModule {}
