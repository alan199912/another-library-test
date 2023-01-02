import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, PrismDirective]
})
export class HomeModule {}
