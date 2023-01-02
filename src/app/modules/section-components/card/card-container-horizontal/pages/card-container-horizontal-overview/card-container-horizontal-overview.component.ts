import { Component } from '@angular/core';
import { CARD_BAD_PRACTICES, CARD_BEST_PRACTICES } from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card-container-horizontal-overview',
  templateUrl: './card-container-horizontal-overview.component.html',
  styleUrls: ['./card-container-horizontal-overview.component.scss']
})
export class CardContainerHorizontalOverviewComponent {
  public bestPractices = CARD_BEST_PRACTICES;
  public badPractices = CARD_BAD_PRACTICES;
}
