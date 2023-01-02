import { ElementRef } from '@angular/core';
import { OAlertDirective } from './alert.directive';

describe('AlertDirective', () => {
  it('should create an instance', () => {
    const mockElement = new ElementRef('');
    const directive = new OAlertDirective(mockElement);
    expect(directive).toBeTruthy();
  });
});
