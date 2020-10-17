import { Component, OnInit } from '@angular/core';
import { Board } from './shared/models/board/board';
import { Dimension } from './shared/models/dimension/dimension';
import { BoxElement } from './shared/models/elements/box-element';
import { TextElement } from './shared/models/elements/text-element';
import { Position } from './shared/models/position/position';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //#region Properties

  board: Board;

  //#endregion

  //#region Lifecycle

  ngOnInit(): void {
    this.board = new Board({
      dimension: new Dimension({ height: 420, width: 720 }),
      elements: [
        new BoxElement({ backgroundColor: '#FFF0F0', position: new Position({ y: 236 }) }),
        new BoxElement({ position: new Position({ x: 186, y: 58 }), dimension: new Dimension({ width: 200, height: 39 }) }),
        new TextElement({ text: 'Textdraw Text', color: '#FFB226' }),
        new TextElement({ text: 'Example Text 2', position: new Position({ x: 220, y: 356 }) }),
      ]
    });
  }

  //#endregion
}
