import { Component } from '@angular/core';
import { CARD_BAD_PRACTICES, CARD_BEST_PRACTICES } from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card-simple-horizontal-overview',
  templateUrl: './card-simple-horizontal-overview.component.html',
  styleUrls: ['./card-simple-horizontal-overview.component.scss']
})
export class CardSimpleHorizontalOverviewComponent {
  public bestPractices = CARD_BEST_PRACTICES;
  public badPractices = CARD_BAD_PRACTICES;
}
