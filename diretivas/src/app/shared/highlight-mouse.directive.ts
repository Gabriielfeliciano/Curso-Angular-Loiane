import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    // this._renderer.setStyle(this._elementeRef.nativeElement, 'background-color','blue')
    this.backgorundColor = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this._renderer.setStyle(this._elementeRef.nativeElement, 'background-color','white')
    this.backgorundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgorundColor!:string


  constructor(
    // private _elementeRef: ElementRef, 
    // private _renderer : Renderer2
    ) { }

}
