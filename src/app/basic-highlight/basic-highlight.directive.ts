import { Directive, ElementRef } from '@angular/core';


@Directive({
	selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements ngOnInit {
	constructor(private elementReference: ElementRef) {}

	ngOnInit() {
		this.elementReference.nativeElement.style.backgroundColor = 'green';
	}
}