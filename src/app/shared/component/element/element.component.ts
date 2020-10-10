import { AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Element } from '../../models/elements/element';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit, OnDestroy {

  //#region Properties

  /**
   * Whether or not the element is active
   */
  active = false;

  /**
   * Whether or not the element is hovered on
   */
  hovered = false;

  /**
   * Whether or not the element is draggable
   */
  drag = true;

  /**
   * Whether or not the element is being dragged
   */
  dragging = false;

  /**
   * The element object
   */
  @Input() element: Element;

  /**
   * The element template reference
   */
  @ViewChild('elementRef') elementRef: ElementRef;

  //#endregion

  //#region Lifecycle

  constructor() { }

  ngOnInit(): void {
    console.log({ element: this.element });
  }

  ngOnDestroy(): void { }

  //#endregion

  //#region Events

  /**
   * Triggers the the element starts being dragged
   */
  onDragStart(): void {

    // Marking the element as being dragged
    this.dragging = true;

    // Marking the element as beiong active
    this.active = true;
  }

  /**
   * Triggers when the element is being dragged
   * @param e The drag event object
   */
  onDrag(e: any): void {

    // Triggers a global click so any active elements lose focus in favor of the element that's being dragged
    document.documentElement.click();

    // Getting the board's client offset
    const parentRect = e?.source?.element?.nativeElement?.parentElement?.parentElement?.getClientRects()?.item(0);

    // Getting the element's client offset
    const rect = e?.source?.element?.nativeElement?.getClientRects()?.item(0);

    // Updating the element's position
    this.element.position.x = rect.x - parentRect.x;
    this.element.position.y = rect.y - parentRect.y;
  }

  /**
   * Triggers when the element stops being dragged
   */
  onDragEnd(): void {

    // Marking the element as not being dragged
    this.dragging = false;

    // Marking the element as active
    this.active = true;
  }

  /**
   * Triggers on global mouse clicks
   * @param e The mouse click event
   */
  @HostListener('document:click', ['$event'])
  onClick(e: MouseEvent): void {

    // Setting the active state of the element depending on whether it was click or not
    this.active = this.elementRef?.nativeElement.contains(e.target);
  }

  /**
   * Triggers when the mouse enters the element
   */
  @HostListener('mouseenter')
  onMouseEnter(): void {

    // Marking the element as being hovered on
    this.hovered = true;
  }

  /**
   * Triggers when the mouse leaves the element
   */
  @HostListener('mouseleave')
  onMouseLeave(): void {

    // Removing the element's hover state
    this.hovered = false;
  }

  //#endregion

  //#region Methods

  /**
   * Gets the height of the element
   */
  getHeight = () => this.element?.dimension?.height;

  /**
   * Gets the width of the element
   */
  getWidth = () => this.element?.dimension?.width;

  /**
   * Gets the position label
   */
  getPositionLabel = () => `(x: ${this.element?.position?.x}, y: ${this.element?.position?.y})`;

  /**
   * Checks whether the element should be active or not
   */
  isActive = () => this.active || this.dragging;

  // Checks whether or not to display the head element (contains the position label and other controls)
  showHead = () => this.isActive() || this.hovered;

  //#endregion
}
