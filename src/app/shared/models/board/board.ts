import { v4 as uuidv4 } from 'uuid';
import { ElementType } from '../../enums/element-types.enum';
import { getElementClass } from '../../utils/element.util';

import { Dimension } from '../dimension/dimension';
import { Element, IElement } from '../elements/element';

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
    this.id = board?.id ?? uuidv4();

    this.dimension = { ...(board?.dimension ?? new Dimension({ height: 720, width: 1280 })) };
    this.elements = [...(board?.elements ?? [])];
  }

  //#endregion

  //#region Methods

  createElement(type: ElementType = ElementType.Box, element?: Partial<IElement>) {
    const GenericElement = getElementClass(type);

    this.elements.push(
      new GenericElement({ ...element })
    );
  }

  //#endregion
}
