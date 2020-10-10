import { Position } from '../position/position';
import { Dimension } from '../dimension/dimension';

export interface IElement {
  dimension: Dimension;
  position: Position;
}

export class Element implements IElement {

  //#region Properties

  dimension: Dimension;
  position: Position;
  initialPos: Position;

  //#endregion

  //#region Lifecycle

  constructor(element: IElement) {
    this.dimension = { ...(element?.dimension ?? new Dimension()) };
    this.position = { ...(element?.position ?? new Position()) };
    this.initialPos = { ...this.position };
  }

  //#endregion
}
