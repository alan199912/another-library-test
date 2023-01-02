import { Component } from '@angular/core';
import { CARD_EVENT_NAVIGATION } from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.scss']
})
export class CardEventComponent {
  public navigation = CARD_EVENT_NAVIGATION;
}
