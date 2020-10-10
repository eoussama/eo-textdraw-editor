import { Component, Input, OnInit } from '@angular/core';
import { Dimension } from '../../models/dimension/dimension';
import { BoxElement } from '../../models/elements/box-element';
import { Element } from '../../models/elements/element';
import { Position } from '../../models/position/position';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  //#region Properties

  elements: Element[] = [];

  @Input() dimension: Dimension;

  //#endregion

  //#region Lifecycle

  constructor() { }

  ngOnInit(): void {
    this.elements.push(new BoxElement());
    this.centerElement(this.elements[0]);
  }

  //#endregion

  //#region Methods

  /**
   * Centers an element on the board
   * @param element The element to center
   */
  centerElement(element: Element): void {
    element.position.x = (this.dimension.width / 2) - (element.dimension.width / 2);
    element.position.y = (this.dimension.height / 2) - (element.dimension.height / 2);
  }

  //#endregion
}
