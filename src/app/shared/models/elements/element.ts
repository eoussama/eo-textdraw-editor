import { v4 as uuidv4 } from 'uuid';

import { Position } from '../position/position';
import { Dimension } from '../dimension/dimension';
import { ElementType } from '../../enums/element-types.enum';

export interface IElement {
  readonly id: string;
  readonly type: ElementType;

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
    this.id = element?.id ?? uuidv4();
    this.name = element?.name ?? '';

    this.dimension = { ...(element?.dimension ?? new Dimension()) };
    this.position = { ...(element?.position ?? new Position()) };
  }

  //#endregion
}
