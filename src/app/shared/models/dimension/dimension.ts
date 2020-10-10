import { getRatio } from '../../utils/_utils';

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
    this.height = getRatio(dimension?.height ?? 0);
    this.width = getRatio(dimension?.width ?? 0);
  }

  //#endregion
}
