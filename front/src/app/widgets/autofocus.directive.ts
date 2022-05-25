import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
})
export class AutofocusDirective implements OnInit {
  @Input()
  appAutoFocus = 'focus';

  constructor(private elt: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    if (this.appAutoFocus === 'select') {
      if (!(this.elt.nativeElement instanceof HTMLInputElement)) {
        throw new Error('appAutoFocus directive must be on an input element');
      }

      this.elt.nativeElement.select();
    }
    this.elt.nativeElement.focus();
  }
}
