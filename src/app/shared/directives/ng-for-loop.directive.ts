import {  Directive,  Input,  SimpleChanges,  TemplateRef,  ViewContainerRef,} from '@angular/core';@Directive({  selector: '[appNgForLoop]',})export class NgForLoopDirective {  @Input() appNgForLoopOf!: any;  constructor(    private container: ViewContainerRef,    private template: TemplateRef<any>  ) {}  ngOnChanges(changes: SimpleChanges) {    this.container.clear();    for (const e of this.appNgForLoopOf) {      if (this.appNgForLoopOf.indexOf(e) % 3 === 1) {        this.container.createEmbeddedView(this.template, {          $implicit: e,          index: this.appNgForLoopOf.indexOf(e),        });      }    }  }}