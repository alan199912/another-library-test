import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayMonthFormat',
  standalone: true
})
export class DayMonthFormatPipe implements PipeTransform {
  transform(value: Date): string {
    const locateDateString = value.toLocaleDateString('es', { weekday: 'short' });
    const dateCapitalized = locateDateString.charAt(0).toUpperCase() + locateDateString.slice(1);
    return `${dateCapitalized} ${value.getDate()}/${value.getMonth() + 1}`;
  }
}
