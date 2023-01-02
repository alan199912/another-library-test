import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OGalleryComponent } from '@alan199912/library-test/gallery';
import { ONavModule } from '@alan199912/library-test/nav';
import { OTableComponent } from '@alan199912/library-test/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { GalleryApiComponent } from './pages/gallery-api/gallery-api.component';
import { GalleryExamplesComponent } from './pages/gallery-examples/gallery-examples.component';
import { GalleryOverviewComponent } from './pages/gallery-overview/gallery-overview.component';

@NgModule({
  declarations: [GalleryComponent, GalleryApiComponent, GalleryExamplesComponent, GalleryOverviewComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    ONavModule,
    OTableComponent,
    OGalleryComponent,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective
  ]
})
export class GalleryModule {}
