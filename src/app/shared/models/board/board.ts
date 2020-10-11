import { Dimension } from '../dimension/dimension';
import { Element } from '../elements/element';

export interface IBoard {
  readonly id: string;
  dimension: Dimension;
  elements: Element[];
}

export class Board implements IBoard {

  //#region Properties

  readonly id: string;

  dimension: Dimension;
  elements: Element[];

  //#endregion

  //#region Lifecycle

  constructor(board?: Partial<IBoard>) {
    this.id = board?.id ?? '';

    this.dimension = { ...(board?.dimension ?? new Dimension({ height: 720, width: 1280 })) };
    this.elements = [...(board?.elements ?? [])];
  }

  //#endregion
}
