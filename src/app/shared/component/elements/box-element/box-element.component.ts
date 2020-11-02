import { AfterViewInit, Component, Injector, Input, OnInit } from '@angular/core';

import { ResizeEvent } from 'angular-resizable-element';
import { IResizeable } from 'src/app/shared/interfaces/iresizeable.interface';
import { Dimension } from 'src/app/shared/models/dimension/dimension';
import { Position } from 'src/app/shared/models/position/position';

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
   * Whether or not the element is being resized
   */
  resizing = false;

  /**
   * Whether or not the element is draggable
   */
  drag = false;

  /**
   * Contains dump info of the element used
   * top display the label when resizing
   */
  dumpElement: { dim: Dimension, pos: Position };

  /**
   * The box element object
   */
  @Input() element: BoxElement;

  //#endregion

  //#region Lifecycle

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit(): void { }

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
  }

  /**
   * Triggers when resizing is started
   */
  onResizeStart(): void {

    // Marking the element as active
    this.active = true;

    // Marking the element as being resized
    this.resizing = true;

    // Getting the ghost client rect
    const ghostClientRect = document.querySelector('.resize-ghost-element').getClientRects().item(0);

    // Initialing the dump object
    this.dumpElement = {
      pos: new Position({ x: ghostClientRect?.left - 6, y: ghostClientRect?.top - 26 }),
      dim: new Dimension({ ...this.element?.dimension })
    };
  }

  /**
   * Triggers when the element is being resized
   */
  onResize(e: ResizeEvent): void {

    // Getting the ghost client rect
    const ghostClientRect = document.querySelector('.resize-ghost-element').getClientRects().item(0);

    // Updating the dump object
    this.dumpElement = {
      pos: new Position({ x: ghostClientRect?.left - 6, y: ghostClientRect?.top - 26 }),
      dim: new Dimension({ height: e?.rectangle?.height, width: e?.rectangle?.width })
    };
  }

  /**
   * Triggers when resizing is finished
   * @param e The resize event object
   */
  onResizeEnd(e: ResizeEvent): void {

    // Marking the element as active
    this.active = true;

    // Marking the element as stoped being resized
    this.resizing = false;

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
  getColor = () => this.element?.backgroundColor;

  /**
   * Getting the resize edges.
   * Used to enable and disable the resize mode
   */
  getResizeEdges = () => this.resize
    ? { bottom: true, right: true, top: true, left: true }
    : { bottom: false, right: false, top: false, left: false }

  /**
   * Validates the resize process
   * @param e The resize event object
   */
  validateResize(e: ResizeEvent): boolean {

    // Getting the board's client offset
    const parentRect = this.elementRef?.nativeElement?.parentElement?.parentElement?.getClientRects()?.item(0);

    // Getting the element's client offset
    const rect = this.elementRef?.nativeElement?.getClientRects()?.item(0);

    // Getting the relative axes
    const relativeX = rect?.left - parentRect?.left;
    const relativeY = rect?.top - parentRect?.top;

    // Limiting the right resize
    if (e.edges.right && e.edges.right > parentRect?.width - (relativeX + rect?.width)) {
      return false;
    }

    // Limiting the left resize
    if (e.edges.left && e.edges.left < relativeX * -1) {
      return false;
    }

    // Limiting the top resize
    if (e.edges.top && e.edges.top < relativeY * -1) {
      return false;
    }

    // Limiting the bottom resize
    if (e.edges.bottom && e.edges.bottom > parentRect?.height - (relativeY + rect?.height)) {
      return false;
    }

    return true;
  }

  //#endregion
}
