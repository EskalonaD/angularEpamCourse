import { Directive, ElementRef, HostBinding, HostListener, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HiglightDirective {

  @HostBinding('class.highlight') get setHiglight() { return this.isHovered }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHovered = false;
  }

  private isHovered = false;

  // constructor(private view: ElementRef) { }

}
