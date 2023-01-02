import { Component } from '@angular/core';
import { CARD_BAD_PRACTICES, CARD_BEST_PRACTICES } from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card-event-simple-overview',
  templateUrl: './card-event-simple-overview.component.html',
  styleUrls: ['./card-event-simple-overview.component.scss']
})
export class CardEventSimpleOverviewComponent {
  public bestPractices = CARD_BEST_PRACTICES;
  public badPractices = CARD_BAD_PRACTICES;
}
