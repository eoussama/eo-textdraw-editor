export interface IDimension {
  height: number;
  width: number;
}

export class Dimension implements IDimension {

  //#region Properties

  height: number;
  width: number;

  //#endregion

  //#region Lifecycle

  constructor(dimension?: IDimension) {
    this.height = dimension?.height ?? 100;
    this.width = dimension?.width ?? 150;
  }

  //#endregion
}
