export interface IPosition {
  x: number;
  y: number;
}

export class Position implements IPosition {

  //#region Properties

  x: number;
  y: number;

  //#endregion

  //#region Lifecycle

  constructor(position: IPosition) {
    this.x = position?.x ?? 0;
    this.y = position?.y ?? 0;
  }

  //#endregion
}
