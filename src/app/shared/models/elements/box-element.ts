import { ElementType } from '../../enums/element-types.enum';
import { Element, IElement } from './element';

export interface IBoxElement extends IElement {
  color: string;
}

export class BoxElement extends Element implements IBoxElement {

  //#region Properties

  readonly type: ElementType = ElementType.Box;

  color: string;

  //#endregion

  //#region Lifecycle

  constructor(boxElement?: Partial<IBoxElement>) {
    super(boxElement as IElement);
    this.color = boxElement?.color ?? '#0000005c';
  }

  //#endregion
}
