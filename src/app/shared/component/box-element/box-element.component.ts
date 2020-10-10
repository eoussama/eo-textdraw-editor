import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import { fadeAnimation } from '../../animations/fade.animation';
import { Dimension } from '../../models/dimension/dimension';
import { BoxElement } from '../../models/elements/box-element';
import { Position } from '../../models/position/position';
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

  resize = true;
  drag = false;

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

  onDragActive(): void {
    this.drag = true;
  }

  onDragDisactive(): void {
    this.drag = false;
  }

  onResizeStart(e: any): void {
    this.active = true;
  }

  onResizeEnd(e: ResizeEvent): void {
    this.active = true;

    if (typeof e.edges.left === 'number') {
      this.element.position.x = this.element.position.x + e.edges.left;
    }

    if (typeof e.edges.top === 'number') {
      this.element.position.y = this.element.position.y + e.edges.top;
    }

    this.element.dimension.height = e?.rectangle.height;
    this.element.dimension.width = e?.rectangle.width;

    this.refreshPosition();
  }

  //#endregion

  //#region Methods

  getColor = () => this.element?.color;

  getResizeEdges = () => this.resize
    ? { bottom: true, right: true, top: true, left: true }
    : { bottom: false, right: false, top: false, left: false };

  //#endregion
}
