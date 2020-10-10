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

  onResizeStart(e: any): void { }

  onResizeEnd(e: ResizeEvent): void {
    console.log({ e });
    // this.element.dimension.height = e?.rectangle.height;
    // this.element.dimension.width = e?.rectangle.width;
  }

  //#endregion

  //#region Methods

  getColor = () => this.element?.color;

  getResizeEdges = () => this.resize
    ? { bottom: true, right: true, top: true, left: true }
    : { bottom: false, right: false, top: false, left: false };

  //#endregion
}
