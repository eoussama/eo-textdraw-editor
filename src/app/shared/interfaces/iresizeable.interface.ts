import { ResizeEvent } from 'angular-resizable-element';

export interface IResizeable {

  //#region Properties

  resize: boolean;

  //#endregion

  //#region Events

  onResizeStart(): void;
  onResize(): void;
  onResizeEnd(e: ResizeEvent): void;

  //#endregion

  //#region Methods

  getResizeEdges(): object;

  //#endregion
}
