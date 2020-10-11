import { Component, Input, OnInit } from '@angular/core';
import { ElementType } from '../../enums/element-types.enum';
import { Board } from '../../models/board/board';
import { Element } from '../../models/elements/element';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  //#region Properties

  ElementType: typeof ElementType = ElementType;

  @Input() board: Board;

  //#endregion

  //#region Lifecycle

  constructor() { }

  ngOnInit(): void {
    console.log({ board: this.board });
  }

  //#endregion

  //#region Methods

  /**
   * Centers an element on the board
   * @param element The element to center
   */
  centerElement(element: Element): void {
    element.position.x = (this.board?.dimension.width / 2) - (element.dimension.width / 2);
    element.position.y = (this.board?.dimension.height / 2) - (element.dimension.height / 2);
  }

  //#endregion
}
