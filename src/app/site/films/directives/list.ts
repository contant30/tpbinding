import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[movieList]',
})

export class ListDirective {

constructor(private el:ElementRef) { }

@Input()

set movieList(movie:any) {

let temp = `<a class="list-group-item list-group-item-action">`;

temp +=

`Titre : ${movie.Title} Année: ${movie.Year} Réalisateur : ${movie.Director}`;

temp += '</a>';

this.el.nativeElement.innerHTML = temp;
}
}
