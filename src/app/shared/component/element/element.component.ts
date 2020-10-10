import { AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Dimension } from '../../models/dimension/dimension';
import { Position } from '../../models/position/position';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit, AfterViewInit, OnDestroy {

  //#region Properties

  active = false;
  hovered = false;
  dragging = false;

  @Input() position: Position;
  @Input() dimension: Dimension;

  @ViewChild('element') element: ElementRef;

  //#endregion

  //#region Lifecycle

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.element?.nativeElement?.style.setProperty('transform', `translate3d(${this.position.x}px, ${this.position.y}px, 0px)`);
  }

  ngOnDestroy(): void { }

  //#endregion

  //#region Events

  onDragStarted(): void {
    this.dragging = true;
    this.active = true;
  }

  onDragging(e: any): void {
    document.documentElement.click();
    const parentRect = e?.source?.element?.nativeElement?.parentElement?.parentElement?.getClientRects()?.item(0);
    const rect = e?.source?.element?.nativeElement?.getClientRects()?.item(0);

    this.position.x = rect.x - parentRect.x;
    this.position.y = rect.y - parentRect.y;
  }

  onDragEnded(): void {
    this.dragging = false;
    this.active = true;
  }

  @HostListener('document:click', ['$event'])
  onClicked(e: MouseEvent): void {
    this.active = this.element?.nativeElement.contains(e.target);
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

  getPositionLabel = () => `(x: ${this.position?.x}, y: ${this.position?.y})`;

  isActive = () => this.active || this.dragging;

  showHead = () => this.isActive() || this.hovered;

  //#endregion
}
