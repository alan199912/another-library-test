import { Injectable } from '@angular/core';
import { Breadcrumb } from '@alan199912/library-test/core/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  public breadcrumb$ = new BehaviorSubject<Breadcrumb>({
    actualRoute: { name: '' },
    routes: [],
    defaultUrl: ''
  });
}
