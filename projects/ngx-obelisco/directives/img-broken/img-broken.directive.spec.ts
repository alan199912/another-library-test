import { ElementRef } from '@angular/core';
import { DefaultImageDirective } from './img-broken.directive';

describe('DefaultImageDirective', () => {
  it('should create an instance', () => {
    const mockElement = new ElementRef('');
    const directive = new DefaultImageDirective(mockElement);
    expect(directive).toBeTruthy();
  });
});
