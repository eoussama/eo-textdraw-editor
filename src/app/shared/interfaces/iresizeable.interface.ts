import { ResizeEvent } from 'angular-resizable-element';

export interface IResizeable {

  //#region Properties

  resize: boolean;
  resizing: boolean;

  //#endregion

  //#region Events

  onResizeStart(): void;
  onResize(e: ResizeEvent): void;
  onResizeEnd(e: ResizeEvent): void;

  //#endregion

  //#region Methods

  getResizeEdges(): object;
  validateResize(event: ResizeEvent): boolean;

  //#endregion
}
