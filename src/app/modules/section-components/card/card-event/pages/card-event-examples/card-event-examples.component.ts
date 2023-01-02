import { Component } from '@angular/core';
import { CARD_EVENT_EXAMPLE_HTML, CARD_EVENT_EXAMPLE_TS } from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card-event-examples',
  templateUrl: './card-event-examples.component.html',
  styleUrls: ['./card-event-examples.component.scss']
})
export class CardEventExamplesComponent {
  public cardExampleHtml = CARD_EVENT_EXAMPLE_HTML;
  public cardExampleTs = CARD_EVENT_EXAMPLE_TS;
  public initialDate = new Date('January 18');
  public finalDate = new Date('February 1');
}
