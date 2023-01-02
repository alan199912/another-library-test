import { Component } from '@angular/core';
import { CARD_BAD_PRACTICES, CARD_BEST_PRACTICES } from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card-simple-overview',
  templateUrl: './card-simple-overview.component.html',
  styleUrls: ['./card-simple-overview.component.scss']
})
export class CardSimpleOverviewComponent {
  public bestPractices = CARD_BEST_PRACTICES;
  public badPractices = CARD_BAD_PRACTICES;
}
