import { Component } from '@angular/core';
import { CARD_EVENT_SIMPLE_EXAMPLE_HTML, CARD_EVENT_SIMPLE_EXAMPLE_TS } from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card-event-simple-examples',
  templateUrl: './card-event-simple-examples.component.html',
  styleUrls: ['./card-event-simple-examples.component.scss']
})
export class CardEventSimpleExamplesComponent {
  public date = new Date();
  public hours = [20, 21, 22];
  public cardExampleHTML = CARD_EVENT_SIMPLE_EXAMPLE_HTML;
  public cardExampleTS = CARD_EVENT_SIMPLE_EXAMPLE_TS;
}
