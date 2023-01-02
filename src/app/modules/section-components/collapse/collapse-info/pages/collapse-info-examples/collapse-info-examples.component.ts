import { Component } from '@angular/core';
import { COLLAPSE_INFO_EXAMPLE_HTML, COLLAPSE_INFO_EXAMPLE_TS } from 'src/app/constants/collapse.constants';

@Component({
  selector: 'app-collapse-info-examples',
  templateUrl: './collapse-info-examples.component.html',
  styleUrls: ['./collapse-info-examples.component.scss']
})
export class CollapseInfoExamplesComponent {
  public array = [
    { header: 'BOLETA N° 2564-59879543', body: 'Solicitud de informes varios', footer: '$ 450' },
    { header: 'BOLETA N° 2564-59879543', body: 'Solicitud de informes varios', footer: '$ 450' }
  ];
  public exampleHTML = COLLAPSE_INFO_EXAMPLE_HTML;
  public exampleTs = COLLAPSE_INFO_EXAMPLE_TS;
}
