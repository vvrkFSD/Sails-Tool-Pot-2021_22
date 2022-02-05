import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTable]'
})
export class TableDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'gray';
   }

}
