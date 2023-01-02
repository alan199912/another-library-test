import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberDayMonthFormatPipe',
  standalone: true
})
export class NumberDayMonthFormatPipe implements PipeTransform {
  transform(value: Date): string {
    return value.toLocaleDateString('es', { day: 'numeric', month: 'long' });
  }
}
