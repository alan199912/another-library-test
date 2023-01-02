import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursFormat',
  standalone: true
})
export class HoursFormatPipe implements PipeTransform {
  transform(value: number[]): string {
    return value.map((e, index) => (value.length - 1 === index ? ` ${e} hs` : `${e} |`)).join(' ');
  }
}
