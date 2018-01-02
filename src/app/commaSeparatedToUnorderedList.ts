import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'commaSeparatedToUnorderedList'})
export class CommaSeparatedToUnorderedListPipe implements PipeTransform {
  transform(value: string): string {
    //turn comma separated strings to ul>li..
    console.log(value);
    let list = value;
    //list.sort(function() { return 0.5 - Math.random() });
     let filmsHtml = '<ul>';    
     for(var i=0; i<list.length; i++) {
        filmsHtml += '<li>' + list[i] + '</li>';
      }    
      filmsHtml += '</ul>';

    return filmsHtml;
  }
}