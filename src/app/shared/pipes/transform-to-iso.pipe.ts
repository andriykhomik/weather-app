import { Pipe, PipeTransform } from '@angular/core';
declare const require: any;
const lookup = require('country-code-lookup');

@Pipe({
  name: 'transformToISO',
})
export class TransformToISOPipe implements PipeTransform {
  transform(country: string): string {
    let response;

    if (country && country.split(' ').length > 1) {
      response = country
        .split(' ')
        .map((a) => a.slice(0, 1))
        .join('')
        .slice(0, 2);
    }
    return lookup.byCountry(country)
      ? ', ' + lookup.byCountry(country)?.iso2
      : ', ' + response || '';
  }
}
