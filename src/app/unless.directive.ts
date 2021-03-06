import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
	@Input() set appUnless (value: boolean) {
		if (!value) {
			this.vcRef.createEmbeddedView(this.tempRef);
		} else {
			this.vcRef.clear();
		}
	} 
	constructor(private tempRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
