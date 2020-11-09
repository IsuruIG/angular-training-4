import { Directive, Renderer2, ElementRef,HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit{
	@HostBinding('style.color') color: string = 'black';
	@Input() defaultColor: string;
	@Input() hoverColor: string = 'white';

  	constructor(private elRef: ElementRef, private elRef2: ElementRef, private renderer: Renderer2) {}

  	ngOnInit() {
  		this.color = this.defaultColor; //Do this to initialize before page renders.
		// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
	}

	@HostListener('mouseenter') onMouseEnter(eventData: Event) {
		this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
		this.color = this.hoverColor;
	}

	@HostListener('mouseleave') onMouseLeave(eventData: Event) {
		this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
		this.color = this.defaultColor;
	}

}
