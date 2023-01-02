import { Component } from '@angular/core';
import { DROPDOWN_BEST_PRACTICES, DROPDOWN_BAD_PRACTICES } from 'src/app/constants/dropdown.constants';

@Component({
  selector: 'app-dropdown-overview',
  templateUrl: './dropdown-overview.component.html',
  styleUrls: ['./dropdown-overview.component.scss']
})
export class DropdownOverviewComponent {
  public bestPractices = DROPDOWN_BEST_PRACTICES;
  public badPractices = DROPDOWN_BAD_PRACTICES;
}
