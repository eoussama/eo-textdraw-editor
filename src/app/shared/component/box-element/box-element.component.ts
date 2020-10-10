import { Component, Input, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import { fadeAnimation } from '../../animations/fade.animation';
import { BoxElement } from '../../models/elements/box-element';
import { ElementComponent } from '../element/element.component';

@Component({
  selector: 'app-box-element',
  templateUrl: './box-element.component.html',
  styleUrls: [
    './box-element.component.scss',
    './../element/element.component.scss'
  ],
  animations: [fadeAnimation]
})
export class BoxElementComponent extends ElementComponent implements OnInit {

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
   * @param e The resize event object
   */
  onResizeStart(e: any): void {

    // Markindg the element as active
    this.active = true;
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

    // Updating the element' size
    this.element.dimension.height = e?.rectangle.height;
    this.element.dimension.width = e?.rectangle.width;
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
    ? { bottom: true, right: true, top: true, left: true }
    : { bottom: false, right: false, top: false, left: false };

  //#endregion
}
