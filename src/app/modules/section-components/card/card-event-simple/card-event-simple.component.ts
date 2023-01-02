import { Component } from '@angular/core';
import { CARD_EVENT_SIMPLE_NAVIGATION } from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card-event-simple',
  templateUrl: './card-event-simple.component.html',
  styleUrls: ['./card-event-simple.component.scss']
})
export class CardEventSimpleComponent {
  public navigation = CARD_EVENT_SIMPLE_NAVIGATION;
}
