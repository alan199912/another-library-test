import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-card-event-simple-api',
  templateUrl: './card-event-simple-api.component.html',
  styleUrls: ['./card-event-simple-api.component.scss']
})
export class CardEventSimpleApiComponent {
  public columns = COLUMNS;
  public dataSource = [
    {
      name: '@Input() <br/> title: string',
      description: 'Se utiliza para colocar el título del card.'
    },
    {
      name: '@Input() <br/> text: string',
      description: 'Se utiliza para colocar el texto del card.'
    },
    {
      name: '@Input() <br/> img: string',
      description: 'Se utiliza para colocar la imagen del card.'
    },
    {
      name: '@Input() <br/> date: Date',
      description: 'Se utiliza para colocar la fecha del card.'
    },
    {
      name: '@Input() <br/> route: string',
      description: 'Se utiliza para establecer la ruta del hipervínculo con el routing de Angular.'
    },
    {
      name: '@Input() <br/> link: string',
      description: 'Se utiliza para establecer el hipervínculo del card.'
    },
    {
      name: '@Input() <br/> hours: number[]',
      description: 'Se utiliza para colocar las horas del card.'
    }
  ];
}
