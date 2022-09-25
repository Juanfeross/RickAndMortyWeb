import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'episodes'
})
export class EpisodesPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value) {
      const split = value.split('/')
      return split[split.length - 1]
    }
    else {
      return '';
    }
  }
}
