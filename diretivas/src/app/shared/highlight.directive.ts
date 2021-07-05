import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.backgorundColor = this.highlightColor;
    this.color = "white";
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgorundColor = this.defaultColor;
    this.color = "white";
  }

  @HostBinding('style.backgroundColor') backgorundColor!:string;
  @HostBinding('style.color') color!:string;


  @Input() defaultColor : string = 'white';
  @Input() highlightColor : string = 'blue';
  
  constructor() { }

  ngOnInit() {
    this.backgorundColor = this.defaultColor;
    this.color = "white"
  }

}
