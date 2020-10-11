import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Board } from '../../models/board/board';
import { BoxElement } from '../../models/elements/box-element';
import { Element } from '../../models/elements/element';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  //#region Properties

  @Input() board: Board;

  //#endregion

  //#region Lifecycle

  constructor() { }

  ngOnInit(): void {
    console.log(this.board);
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
