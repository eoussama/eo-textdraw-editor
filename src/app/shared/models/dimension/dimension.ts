import { Identifiers } from '@angular/compiler';

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
    this.height = dimension?.height ?? 0;
    this.width = dimension?.width ?? 0;
  }

  //#endregion
}
