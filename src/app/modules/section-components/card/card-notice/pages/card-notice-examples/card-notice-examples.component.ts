import { Component } from '@angular/core';
import {
  CARD_NOTICE_EXAMPLE_HTML,
  CARD_NOTICE_AUDIO_EXAMPLE_HTML,
  CARD_NOTICE_EXAMPLE_TS
} from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card-notice-examples',
  templateUrl: './card-notice-examples.component.html',
  styleUrls: ['./card-notice-examples.component.scss']
})
export class CardNoticeExamplesComponent {
  public tags = ['Etiqueta 1', 'Etiqueta 2', 'Etiqueta 3'];
  public date = new Date();
  public cardExampleHTML = CARD_NOTICE_EXAMPLE_HTML;
  public cardExampleTS = CARD_NOTICE_EXAMPLE_TS;
  public cardExampleAudioHTML = CARD_NOTICE_AUDIO_EXAMPLE_HTML;
}
