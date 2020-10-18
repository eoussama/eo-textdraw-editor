import { ElementType } from '../../enums/element-types.enum';
import { Element, IElement } from './element';

export interface IBoxElement extends IElement {
  backgroundColor: string;
}

export class BoxElement extends Element implements IBoxElement {

  //#region Properties

  static readonly DEFAULT_NAME: string = 'Box Element';

  readonly type: ElementType = ElementType.Box;

  backgroundColor: string;

  //#endregion

  //#region Lifecycle

  constructor(boxElement?: Partial<IBoxElement>) {
    super(boxElement as IElement);
    this.backgroundColor = boxElement?.backgroundColor ?? '#0000005c';
  }

  //#endregion
}
