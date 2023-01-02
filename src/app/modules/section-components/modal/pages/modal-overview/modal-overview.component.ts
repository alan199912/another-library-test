import { Component } from '@angular/core';
import { MODAL_BAD_PRACTICES, MODAL_BEST_PRACTICES } from 'src/app/constants/modal.constants';

@Component({
  selector: 'app-modal-overview',
  templateUrl: './modal-overview.component.html',
  styleUrls: ['./modal-overview.component.scss']
})
export class ModalOverviewComponent {
  public bestPractices = MODAL_BEST_PRACTICES;
  public badPractices = MODAL_BAD_PRACTICES;
}
