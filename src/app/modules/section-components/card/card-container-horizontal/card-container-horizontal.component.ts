import { Component } from '@angular/core';
import { CARD_CONTAINER_HORIZONTAL_NAVIGATION } from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card-container-horizontal',
  templateUrl: './card-container-horizontal.component.html',
  styleUrls: ['./card-container-horizontal.component.scss']
})
export class CardContainerHorizontalComponent {
  public navigation = CARD_CONTAINER_HORIZONTAL_NAVIGATION;
}
