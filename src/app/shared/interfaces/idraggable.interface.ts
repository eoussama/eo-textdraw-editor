export interface IDraggable {

  //#region Properties

  drag: boolean;
  dragging: boolean;

  //#endregion

  //#region Events

  onDragStart(): void;
  onDrag(e: any): void;
  onDragEnd(): void;

  //#endregion
}
