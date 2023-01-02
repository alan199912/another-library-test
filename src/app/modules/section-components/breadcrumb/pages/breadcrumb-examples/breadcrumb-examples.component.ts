import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '@alan199912/library-test/core/services';
import { BREADCRUMB_EXAMPLE_TS } from 'src/app/constants/breadcrumb.constants';

@Component({
  selector: 'app-breadcrumb-examples',
  templateUrl: './breadcrumb-examples.component.html',
  styleUrls: ['./breadcrumb-examples.component.scss']
})
export class BreadcrumbExamplesComponent implements OnInit {
  public exampleTS = BREADCRUMB_EXAMPLE_TS;
  constructor(private readonly breadcrumb: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumb.breadcrumb$.next({
      actualRoute: { name: 'ruta actual' },
      routes: [
        { name: 'ruta 1' },
        { name: 'ruta 2', id: '15151' },
        { name: 'ruta 3', url: '/custom-routes' },
        { name: 'ruta 4', id: '525252525', url: '/custom' }
      ],
      defaultUrl: '/url-default'
    });
  }
}
