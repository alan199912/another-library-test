import { Component } from '@angular/core';
import { CARD_BAD_PRACTICES, CARD_BEST_PRACTICES } from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card-container-overview',
  templateUrl: './card-container-overview.component.html',
  styleUrls: ['./card-container-overview.component.scss']
})
export class CardContainerOverviewComponent {
  public bestPractices = CARD_BEST_PRACTICES;
  public badPractices = CARD_BAD_PRACTICES;
}
