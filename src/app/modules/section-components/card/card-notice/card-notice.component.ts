import { Component } from '@angular/core';
import { CARD_NOTICE_NAVIGATION } from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card-notice',
  templateUrl: './card-notice.component.html',
  styleUrls: ['./card-notice.component.scss']
})
export class CardNoticeComponent {
  public navigation = CARD_NOTICE_NAVIGATION;
}
