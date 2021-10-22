import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRating]'
})
export class RatingDirective {

  element!: ElementRef
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = "white";
    this.element = el;
   }
    
}
