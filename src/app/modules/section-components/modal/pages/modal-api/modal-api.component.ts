import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-modal-api',
  templateUrl: './modal-api.component.html',
  styleUrls: ['./modal-api.component.scss']
})
export class ModalApiComponent {
  public dataSource = [
    {
      name: '@Input() <br/> dataTarget: string',
      description: 'Se utiliza para identificar el componente.'
    },
    {
      name: '@Input() <br/> title: string',
      description: 'Se utiliza para mostrar el título del componente.'
    },
    {
      name: '@Input() <br/> description: string',
      description: 'Se utiliza para mostrar la descripción del componente.'
    }
  ];
  public columns = COLUMNS;
}
