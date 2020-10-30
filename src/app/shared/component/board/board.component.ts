import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ToolboxService } from '../../services/toolbox/toolbox.service';

import { ElementType } from '../../enums/element-types.enum';
import { Element } from '../../models/elements/element';
import { Board } from '../../models/board/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {

  //#region Properties

  ElementType: typeof ElementType = ElementType;
  subscriptions: Subscription = new Subscription();

  @Input() board: Board;

  //#endregion

  //#region Lifecycle

  constructor(
    private toolbox: ToolboxService
  ) { }

  ngOnInit(): void {
    console.log({ board: this.board });

    this.subscriptions.add(
      this.toolbox
        .elementClicked
        .pipe(filter((type: ElementType) => type !== ElementType.None))
        .subscribe((type: ElementType) => {
          this.board.createElement(type);
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  //#endregion

  //#region Events

  /**
   * Triggers on mouse clicks
   * @param e The mouse click event
   */
  @HostListener('click')
  onClick(): void {
    this.toolbox.activeElement.next(null);
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
