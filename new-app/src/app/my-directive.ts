import { Directive, Input, ElementRef, HostListener, EventEmitter, HostBinding, Renderer2 } from "@angular/core";

@Directive({
    selector: '[myDirective]',
    inputs: ['myinput'],
    outputs: ['myoutput']
})
export class MyDirective{
    myinput;

    constructor(private el :ElementRef, private renderer: Renderer2){
        console.log(el)
    }

    myoutput = new EventEmitter();

    // method decorator
    // @HostListener('click') changeColor(){
    //     this.el.nativeElement.style.color = "red";
    //     this.myoutput.emit(this.myinput);
    // }

    @HostBinding('href') myhref;

    @HostListener('mouseenter') changeLink(){
        this.myhref = 'https://www.google.com';
        this.el.nativeElement.style.backgroundColor = 'red';
        this.el.nativeElement.style.color = 'white';
    }

    @HostListener('mouseleave') changeBack(){
        this.myhref = '';
        this.el.nativeElement.style.color = 'black';
        this.el.nativeElement.style.backgroundColor = 'white';
        // this.renderer.setAttribute()
    }
}