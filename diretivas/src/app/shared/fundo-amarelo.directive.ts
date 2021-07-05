import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    //Não seguro porque altera o DOM
    // this.elementRef.nativeElement.style.backgroundColor = "yellow";
    // console.log(this.elementRef.nativeElement.style.backgroundColor);

    //Forma mais segura e aconselhavel
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','yellow')
    
   }

}
