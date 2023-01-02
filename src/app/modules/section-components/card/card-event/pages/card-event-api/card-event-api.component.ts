import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-card-event-api',
  templateUrl: './card-event-api.component.html',
  styleUrls: ['./card-event-api.component.scss']
})
export class CardEventApiComponent {
  public columns = COLUMNS;
  public dataSource = [
    {
      name: '@Input() <br/> title: string',
      description: 'Se utiliza para colocar el título del card.'
    },
    {
      name: '@Input() <br/> eventName: string',
      description: 'Se utiliza para colocar el nombre del evento del card.'
    },
    {
      name: '@Input() <br/> initialDate: Date',
      description: 'Se utiliza para colocar la fecha en la que inicia el evento.'
    },
    {
      name: '@Input() <br/> finalDate: Date',
      description: 'Se utiliza para colocar la fecha en la que finaliza el evento.'
    },
    {
      name: '@Input() <br/> img: string',
      description: 'Se utiliza para colocar la imagen del card.'
    },
    {
      name: '@Input() <br/> imgEvent: string',
      description: 'Se utiliza para colocar la imagen del evento del card.'
    },
    {
      name: '@Input() <br/> link: string',
      description: 'Se utiliza para establecer el hipervínculo del card.'
    },
    {
      name: '@Input() <br/> route: string',
      description: 'Se utiliza para establecer la ruta del hipervínculo con el routing de Angular.'
    }
  ];
}
