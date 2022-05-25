import { Pipe, PipeTransform } from '@angular/core';
import { max } from 'rxjs';

@Pipe({
  name: 'ellipsis',
})
export class EllipsisPipe implements PipeTransform {
  transform(value: unknown, maxLength = 10): string {
    if (typeof value !== 'string') {
      throw new Error('value must be a string.');
    }

    if (value.length > maxLength) {
      return value.substring(0, maxLength) + '...';
    }

    return value;
  }
}
