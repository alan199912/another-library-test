import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-card-container-horizontal-api',
  templateUrl: './card-container-horizontal-api.component.html',
  styleUrls: ['./card-container-horizontal-api.component.scss']
})
export class CardContainerHorizontalApiComponent {
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
      name: '@Input() <br/> link: string',
      description: 'Se utiliza para establecer el hipervínculo del card.'
    },
    {
      name: '@Input() <br/> route: string',
      description: 'Se utiliza para establecer la ruta del hipervínculo con el routing de Angular.'
    },
    {
      name: '@Input() <br/> isBig: boolean',
      description: 'Se utiliza para establecer el tamaño del card. Por defecto es <strong>false</strong>.'
    },
    {
      name: '@Input() <br/> isUnbordered: boolean',
      description: 'Se utiliza para establecer el borde en las cards con icono. Por defecto es <strong>false</strong>.'
    }
  ];
}
