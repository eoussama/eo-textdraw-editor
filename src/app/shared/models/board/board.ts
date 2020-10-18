import { v4 as uuidv4 } from 'uuid';
import { ElementType } from '../../enums/element-types.enum';
import { getElementClass } from '../../utils/element.util';

import { Dimension } from '../dimension/dimension';
import { IBoxElement } from '../elements/box-element';
import { Element, IElement } from '../elements/element';
import { ITextElement } from '../elements/text-element';

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

  /**
   * Creates and adds an element to the board
   *
   * @param type The type of the element
   * @param element The element properties
   */
  createElement(type: ElementType = ElementType.Box, element?: Partial<IElement | IBoxElement | ITextElement>) {

    // Getting the element class
    const GenericElement = getElementClass(type);

    // Getting the index
    const index = Math.max(this.elements.filter(e => e.type === type)?.length + 1 ?? 1, 1);

    // Adding the element to the board
    this.elements.push(
      new GenericElement({

        // Getting the properties
        ...element,

        // Building a contextual name
        name: element?.name || `${GenericElement.DEFAULT_NAME} (${index})`
      })
    );
  }

  //#endregion
}
