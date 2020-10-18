import { Component, OnInit } from '@angular/core';
import { ElementType } from './shared/enums/element-types.enum';
import { Board } from './shared/models/board/board';
import { Dimension } from './shared/models/dimension/dimension';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //#region Properties

  text = '';
  color = '';
  board: Board;
  ElementType = ElementType;

  //#endregion

  //#region Lifecycle

  ngOnInit(): void {
    this.board = new Board({ dimension: new Dimension({ height: 600, width: 600 }) });
  }

  //#endregion

  //#region Events

  onElementAdd(type: ElementType): void {
    this.board.createElement(type, {
      text: this.text,
      color: this.color,
      backgroundColor: this.color
    });
  }

  onColorChanged(e: any): void {
    this.color = e?.target?.value;
  }

  onTextChanged(e: any): void {
    this.text = e?.target?.value;
  }

  //#endregion
}
