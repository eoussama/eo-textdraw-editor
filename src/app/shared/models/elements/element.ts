import { Position } from '../position/position';
import { Dimension } from '../dimension/dimension';
import { ElementType } from '../../enums/element-types.enum';

export interface IElement {
  id: string;
  name: string;
  dimension: Dimension;
  position: Position;
}

export class Element implements IElement {

  //#region Properties

  readonly type: ElementType;
  readonly id: string;

  name: string;
  dimension: Dimension;
  position: Position;

  //#endregion

  //#region Lifecycle

  constructor(element: IElement) {
    this.id = element?.id ?? '';
    this.name = element?.name ?? '';

    this.dimension = { ...(element?.dimension ?? new Dimension()) };
    this.position = { ...(element?.position ?? new Position()) };
  }

  //#endregion
}
