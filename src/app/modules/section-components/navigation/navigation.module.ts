import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';
import { ONavModule } from '@alan199912/library-test/nav';

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, NavigationRoutingModule, ONavModule]
})
export class NavigationModule {}
