import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import { IResizeable } from 'src/app/shared/interfaces/iresizeable.interface';
import { BoxElement } from '../../../models/elements/box-element';
import { ElementComponent } from '../element/element.component';

@Component({
  selector: 'app-box-element',
  templateUrl: './box-element.component.html',
  styleUrls: [
    './box-element.component.scss',
    './../element/element.component.scss'
  ]
})
export class BoxElementComponent extends ElementComponent implements OnInit, AfterViewInit, IResizeable {

  //#region Properties

  /**
   * Whether or not the element is resizeable
   */
  resize = true;

  /**
   * Whether or not the element is draggable
   */
  drag = false;

  /**
   * The box element object
   */
  @Input() element: BoxElement;

  //#endregion

  //#region Lifecycle

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {

      // Updating the element's max size
      this.updateElementMaxSize();
    }, 0);
  }

  //#endregion

  //#region Events

  /**
   * Triggers when the dragging mode is activated, caused by entering the mouse to the hitbox element
   */
  onDragActive(): void {

    // Activating the dragging mode
    this.drag = true;
  }

  /**
   * Triggers when the dragging mode is deactivated, caused by exiting the mouse from the hitbox element
   */
  onDragDisactive(): void {

    // Deactivating the dragging mode
    this.drag = false;

    // Updating the element's max size
    this.updateElementMaxSize();
  }

  /**
   * Triggers when resizing is started
   */
  onResizeStart(): void {

    // Markindg the element as active
    this.active = true;
  }

  /**
   * Triggers when the element is being resized
   */
  onResize(): void {
    this.updateElementMaxSize();
  }

  /**
   * Triggers when resizing is finished
   * @param e The resize event object
   */
  onResizeEnd(e: ResizeEvent): void {

    // Marking the element as active
    this.active = true;

    // If the element has been resized from the left
    if (typeof e.edges.left === 'number') {

      // Update the position
      this.element.position = { ...this.element.position, x: this.element.position.x + e.edges.left };
    }

    // If the element has been resized from the right
    if (typeof e.edges.top === 'number') {

      // Update the position
      this.element.position = { ...this.element.position, y: this.element.position.y + e.edges.top };
    }

    // Getting the maximum values for the height and width
    const maxHeight = parseInt(this.elementRef?.nativeElement?.style.maxHeight, 10) || e?.rectangle.height;
    const maxWidth = parseInt(this.elementRef?.nativeElement?.style.maxWidth, 10) || e?.rectangle.width;

    // Updating the element' size
    this.element.dimension.height = Math.min(e?.rectangle.height, maxHeight);
    this.element.dimension.width = Math.min(e?.rectangle.width, maxWidth);
  }

  //#endregion

  //#region Methods

  /**
   * Getting the element's color
   */
  getColor = () => this.element?.color;

  /**
   * Getting the resize edges.
   * Used to enable and disable the resize mode
   */
  getResizeEdges = () => this.resize
    ? { bottom: true, right: true, top: false, left: false }
    : { bottom: false, right: false, top: false, left: false }

  /**
   * Updates the element's maximum size
   */
  updateElementMaxSize(): void {
    // Getting the board's client offset
    const parentRect = this.elementRef?.nativeElement?.parentElement?.parentElement?.getClientRects()?.item(0);

    // Getting the element's client offset
    const rect = this.elementRef?.nativeElement?.getClientRects()?.item(0);

    // Calculating the maximum size
    const maxHeight = parentRect?.height - (rect?.top - parentRect?.top);
    const maxWidth = parentRect?.width - (rect?.left - parentRect?.left);

    // Updating the maximum size
    this.elementRef?.nativeElement?.style.setProperty('max-height', `${maxHeight}px`, 'important');
    this.elementRef?.nativeElement?.style.setProperty('max-width', `${maxWidth}px`, 'important');
  }

  //#endregion
}
