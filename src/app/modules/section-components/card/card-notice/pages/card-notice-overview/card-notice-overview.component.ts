import { Component } from '@angular/core';
import { CARD_BAD_PRACTICES, CARD_BEST_PRACTICES } from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card-notice-overview',
  templateUrl: './card-notice-overview.component.html',
  styleUrls: ['./card-notice-overview.component.scss']
})
export class CardNoticeOverviewComponent {
  public bestPractices = CARD_BEST_PRACTICES;
  public badPractices = CARD_BAD_PRACTICES;
}
