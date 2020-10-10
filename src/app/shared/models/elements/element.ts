import { Position } from '../position/position';
import { Dimension } from '../dimension/dimension';

export interface IElement {
  position: Position;
  dimension: Dimension;
}

export class Element {

  //#region Properties

  position: Position;
  dimension: Dimension;

  //#endregion

  //#region Lifecycle

  constructor(element: IElement) {
    this.position = { ...(element?.position ?? new Position()) };
    this.dimension = { ...(element?.dimension ?? new Dimension()) };
  }

  //#endregion
}
