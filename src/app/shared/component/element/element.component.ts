import { AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Element } from '../../models/elements/element';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit, AfterViewInit, OnDestroy {

  //#region Properties

  active = false;
  hovered = false;

  drag = true;
  dragging = false;

  @Input() element: Element;
  @ViewChild('elementRef') elementRef: ElementRef;

  //#endregion

  //#region Lifecycle

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const x = this.element?.position?.x;
    const y = this.element?.position?.y;

    this.elementRef?.nativeElement?.style.setProperty('transform', `translate3d(${x}px, ${y}px, 0px)`);
  }

  ngOnDestroy(): void { }

  //#endregion

  //#region Events

  onDragStart(): void {
    this.dragging = true;
    this.active = true;
  }

  onDrag(e: any): void {
    document.documentElement.click();
    const parentRect = e?.source?.element?.nativeElement?.parentElement?.parentElement?.getClientRects()?.item(0);
    const rect = e?.source?.element?.nativeElement?.getClientRects()?.item(0);

    this.element.position.x = rect.x - parentRect.x;
    this.element.position.y = rect.y - parentRect.y;
  }

  onDragEnd(): void {
    this.dragging = false;
    this.active = true;
  }

  @HostListener('document:click', ['$event'])
  onClick(e: MouseEvent): void {
    this.active = this.elementRef?.nativeElement.contains(e.target);
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.hovered = true;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.hovered = false;
  }

  //#endregion

  //#region Methods

  getHeight = () => this.element?.dimension?.height;

  getWidth = () => this.element?.dimension?.width;

  getPositionLabel = () => `(x: ${this.element?.position?.x}, y: ${this.element?.position?.y})`;

  isActive = () => this.active || this.dragging;

  showHead = () => this.isActive() || this.hovered;

  //#endregion
}
