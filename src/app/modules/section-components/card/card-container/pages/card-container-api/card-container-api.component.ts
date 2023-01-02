import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-card-container-api',
  templateUrl: './card-container-api.component.html',
  styleUrls: ['./card-container-api.component.scss']
})
export class CardContainerApiComponent {
  public columns = COLUMNS;
  public dataSource = [
    {
      name: '@Input() <br/> title: string',
      description: 'Se utiliza para establecer el título del card.'
    },
    {
      name: '@Input() <br/> text: string',
      description: 'Se utiliza para establecer el texto del card.'
    },
    {
      name: '@Input() <br/> link: string',
      description: 'Se utiliza para establecer el hipervínculo del card.'
    },
    {
      name: '@Input() <br/> route: string',
      description: 'Se utiliza para establecer la ruta del hipervínculo con el routing de Angular.'
    },
    {
      name: '@Input() <br/> srcAudio: string',
      description: 'Se utiliza para establecer el audio del card.'
    }
  ];
}
