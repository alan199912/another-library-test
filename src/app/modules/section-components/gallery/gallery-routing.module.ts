import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryApiComponent } from './pages/gallery-api/gallery-api.component';
import { GalleryExamplesComponent } from './pages/gallery-examples/gallery-examples.component';
import { GalleryOverviewComponent } from './pages/gallery-overview/gallery-overview.component';

const routes: Routes = [
  { path: 'overview', component: GalleryOverviewComponent },
  { path: 'api', component: GalleryApiComponent },
  { path: 'examples', component: GalleryExamplesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule {}
