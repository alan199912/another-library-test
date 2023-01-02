import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardContainerHorizontalComponent } from './card-container-horizontal/card-container-horizontal.component';
import { CardEventComponent } from './card-event/card-event.component';
import { CardNoticeComponent } from './card-notice/card-notice.component';
import { CardEventSimpleComponent } from './card-event-simple/card-event-simple.component';
import { CardSimpleComponent } from './card-simple/card-simple.component';
import { CardSimpleHorizontalComponent } from './card-simple-horizontal/card-simple-horizontal.component';

const routes: Routes = [
  {
    path: 'card-container',
    component: CardContainerComponent,
    loadChildren: () => import('./card-container/card-container.module').then((m) => m.CardContainerModule)
  },
  {
    path: 'card-container-horizontal',
    component: CardContainerHorizontalComponent,
    loadChildren: () =>
      import('./card-container-horizontal/card-container-horizontal.module').then(
        (m) => m.CardContainerHorizontalModule
      )
  },
  {
    path: 'card-event',
    component: CardEventComponent,
    loadChildren: () => import('./card-event/card-event.module').then((m) => m.CardEventModule)
  },
  {
    path: 'card-notice',
    component: CardNoticeComponent,
    loadChildren: () => import('./card-notice/card-notice.module').then((m) => m.CardNoticeModule)
  },
  {
    path: 'card-event-simple',
    component: CardEventSimpleComponent,
    loadChildren: () => import('./card-event-simple/card-event-simple.module').then((m) => m.CardEventSimpleModule)
  },
  {
    path: 'card-simple',
    component: CardSimpleComponent,
    loadChildren: () => import('./card-simple/card-simple.module').then((m) => m.CardSimpleModule)
  },
  {
    path: 'card-simple-horizontal',
    component: CardSimpleHorizontalComponent,
    loadChildren: () =>
      import('./card-simple-horizontal/card-simple-horizontal.module').then((m) => m.CardSimpleHorizontalModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'card-container' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule {}
